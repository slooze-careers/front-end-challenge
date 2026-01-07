import React, { useState } from "react";
import { Input, Button, Form, Alert } from "antd";
import { LOGIN_URL } from "../../constant";

export default function Login() {
  const [error, setError] = useState("");
  const handleSubmit = async (formData) => {
    try {
      const loginUrl = LOGIN_URL.replace('paramEmail', formData.email).replace('paramPassword', formData.password);
      const response = await fetch(
        loginUrl
      );
      const data = await response.json();
      if (data.length > 0) {
        const user = data[0];
        delete user.password;
        sessionStorage.setItem("user", btoa(JSON.stringify(user)));
        if (user.role === "manager") {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/product";
        }
      } else {
        setError("Login Failed");
      }
    } catch (error) {
      setError("Error during Login");
    }
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-gradient-to-r from-[--bgcolor] to-[--ref1]">
      <div className="border border-1 w-[350px] h-[370px] bg-white p-6">
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
          className="pb-2"
        >
          <div className="mb-10">
            <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
              LOGIN
            </h1>
          </div>

          <div className="mb-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>
          <div className="mb-5">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </div>
          <div className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
        {error && <Alert title={error} type="error" closable />}
      </div>
    </div>
  );
}
