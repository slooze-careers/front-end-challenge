import React, { useState } from "react";
import PageLayout from "../../components/layout";
import { Form, Input, Button, InputNumber, Alert } from "antd";
import { ADD_URL } from "../../constant";

export default function Addproduct() {
  const [error, setError] = useState("");
  const [type, setType] = useState("success");
  const handleProduct = async (values) => {
    try {
      const response = await fetch(ADD_URL, {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setType("success");
        setError("Data added successfully");
      } else {
        setType("error");
        setError("Failed to add data");
      }
    } catch (error) {
      setType("error");
      setError("Error during add");
    }
  };

  return (
    <PageLayout>
      <div className="flex justify-between">
        <div>
          <div className=" w-[350px] h-[370px]">
            <Form onFinish={handleProduct}>
              <div className="mb-10">
                <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                  Add Product
                </h1>
              </div>

              <div className="mb-5">
                <Form.Item
                  label="Product Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Product Name!",
                    },
                  ]}
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
                >
                  <InputNumber placeholder="Quantity" defaultValue={0} />
                </Form.Item>
              </div>

              <div className="mb-5">
                <Form.Item
                  label="Weight"
                  name="weight"
                  rules={[{ required: true, message: "Please enter weight!" }]}
                >
                  <InputNumber
                    style={{ width: 200 }}
                    defaultValue={0}
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
                  rules={[{ required: true, message: "Please enter price!" }]}
                >
                  <InputNumber
                    style={{ width: 200 }}
                    defaultValue={0}
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
                >
                  <Input placeholder="Category" />
                </Form.Item>
              </div>
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
            {error && <Alert title={error} type={type} closable />}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
