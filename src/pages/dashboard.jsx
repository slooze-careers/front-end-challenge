import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout";
import { Bar, Pie } from "react-chartjs-2";
import "../chartConfig";
import { DASHBOARD_URL } from "../constant";

export default function Dashboard() {
  const token = sessionStorage.getItem("user");
  const role = JSON.parse(atob(token)).role;

  const [productData, setProductData] = useState([]);
  const [productLabel, setProductLabel] = useState([]);

  const [productCat, setProductCat] = useState([]);
  const [productCount, setProductCount] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(DASHBOARD_URL);
      const datas = await response.json();

      const name = datas.map((key) => key.name).slice(0, 8);
      const qty = datas.map((key) => key.quantity).slice(0, 8);
      const cat = [...new Set(datas.map((key) => key.category))];
      const count = datas.reduce((acc, i) => {
        acc[i.category] = (acc[i.category] || 0) + i.quantity;
        return acc;
      }, []);

      const finalCount = cat.map((key) => count[key] || 0);

      setProductData(qty);
      setProductLabel(name);
      setProductCat(cat);
      setProductCount(finalCount);
      // setData(datas);
    } catch (error) {
      console.log(error);
    }
  };

  // fetchDataCat();

  const barData = {
    labels: productLabel,
    datasets: [
      {
        label: "Product by quantity",
        data: productData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 20,
        minBarLength: 2,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Inventory" },
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 14,
      },
      formatter: (value) => value,
    },
  };

  const pieData = {
    labels: productCat,
    datasets: [
      {
        label: "Product by category",
        data: productCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 20,
        minBarLength: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Category" },
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 14,
      },
      formatter: (value) => value,
    },
  };

  useEffect(() => {
    if (role !== "manager") {
      window.location.href = "/product";
    }
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <PageLayout>
      <div className=" flex gap-20 w-full">
        <div className="h-[400px] w-1/2">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="h-[400px] w-1/2">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </PageLayout>
  );
}
