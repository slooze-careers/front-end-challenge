import React, { useEffect, useState, useCallback } from "react";
import PageLayout from "../../components/layout";
import { Form, Input, Button, InputNumber, Alert } from "antd";
import { useParams } from "react-router-dom";
import { PRODUCTGET_URL, EDIT_URL } from "../../constant";

export default function Editproduct() {
  const [prodId, setProdId] = useState("");
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("success");

  const params = useParams();

  const getAllProduct = useCallback(async () => {
    setProdId(params.id);
    const response = await fetch(PRODUCTGET_URL.replace("paramId", params.id));
    const data = await response.json();
    data.length > 0 && setProduct(data[0]);
  }, [params]);

  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);

  const handleProduct = async (values) => {
    const response = await fetch(EDIT_URL.replace('paramId', prodId), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setType("success");
      setError("Update successfully");
    } else {
      setType("error");
      setError("Failed to update data");
    }
    console.log("Success", response);
  };

  return (
    <PageLayout>
      <div className="flex justify-between">
        <div>
          <div className=" w-[350px] h-[420px]">
            <Form onFinish={handleProduct}>
              <div className="mb-5">
                <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                  Edit Product
                </h1>
              </div>
              {error && (
                <Alert title={error} type={type} closable banner={true} />
              )}

              {product && (
                <>
                  <div className="my-5">
                    <Form.Item
                      label="Product Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Product Name!",
                        },
                      ]}
                      initialValue={product.name}
                    >
                      <Input placeholder="Product name" />
                    </Form.Item>
                  </div>

                  <div className="mb-5">
                    <Form.Item
                      label="Quantity"
                      name="quantity"
                      rules={[
                        { required: true, message: "Please enter quantity!" },
                      ]}
                      initialValue={product.quantity}
                    >
                      <InputNumber placeholder="Quantity" />
                    </Form.Item>
                  </div>

                  <div className="mb-5">
                    <Form.Item
                      label="Weight"
                      name="weight"
                      rules={[
                        { required: true, message: "Please enter weight!" },
                      ]}
                      initialValue={product.weight}
                    >
                      <InputNumber
                        style={{ width: 200 }}
                        controls={false}
                        precision={2}
                        step={0.01}
                        parser={(val) => Number(val)}
                      />
                    </Form.Item>
                  </div>

                  <div className="mb-5">
                    <Form.Item
                      label="Price"
                      name="price"
                      rules={[
                        { required: true, message: "Please enter price!" },
                      ]}
                      initialValue={product.price}
                    >
                      <InputNumber
                        style={{ width: 200 }}
                        controls={false}
                        precision={2}
                        step={0.01}
                        parser={(val) => Number(val)}
                      />
                    </Form.Item>
                  </div>

                  <div className="mb-5">
                    <Form.Item
                      label="Category"
                      name="category"
                      rules={[
                        { required: true, message: "Please enter Category!" },
                      ]}
                      initialValue={product.category}
                    >
                      <Input placeholder="Category" />
                    </Form.Item>
                  </div>

                  <div className="flex justify-center">
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
