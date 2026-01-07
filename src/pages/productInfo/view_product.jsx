import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import PageLayout from "../../components/layout";
import { Button, Flex } from "antd";
import { PRODUCT_URL } from "../../constant";

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Weight",
    key: "weight",
    dataIndex: "weight",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Category",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" key={_}>
        <a href={`/product/edit/${record.id}`}>Edit</a>
      </Space>
    ),
  },
];

function ViewProduct() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(PRODUCT_URL);
      const datas = await response.json();
      setData(datas);
    } catch (error) {}
  };
  useEffect(() => {
    data.length === 0 && fetchData();
  }, [data]);
  return (
    <PageLayout>
      <Flex gap="small" wrap className="flex justify-end items-end mb-5">
        <Button type="primary" href="/product/add">Add Product</Button>
      </Flex>{" "}
      <Table columns={columns} dataSource={data} rowKey="id"/>
    </PageLayout>
  );
}

export default ViewProduct;
