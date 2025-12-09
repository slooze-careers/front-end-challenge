import { useEffect, useState, useContext } from "react";
import { Layout, Menu, Switch } from "antd";
import { ThemeContext } from "../context/ThemeContextProvider";

const { Header, Content, Footer } = Layout;

const menuList = [
  { key: 1, label: "Dashboard", href: "/dashboard" },
  { key: 2, label: "Products", href: "/product" },
];

export default function PageLayout({ children }) {
  const [authUser, setAuthUser] = useState(false);
  const [current, setCurrent] = useState("");
  const token = sessionStorage.getItem("user");
  const name = JSON.parse(atob(token)).name;

  const items = menuList.map((value, index) => ({
    key: index + 1,
    label: <a href={value.href}>{value.label}</a>,
  }));
  const { theme, toggleTheme } = useContext(ThemeContext);
  const params = window.location.pathname;

  useEffect(() => {
    if (token) setAuthUser(true);
    else window.location.href = "/";
  }, [token]);

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    if (params.includes("dashboard")) {
      setCurrent("1");
    } else if (params.includes("product")) {
      setCurrent("2");
    }
  }, [params]);

  return (
    authUser && (
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          {current && (
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[current]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          )}

          <a href="/" onClick={handleLogout} className="text-white">
            Hello {name} (Logout)
          </a>

          <div className="ml-4">
            <Switch
              checkedChildren="light"
              unCheckedChildren="dark"
              checked={theme === "light"}
              onChange={toggleTheme}
              style={{ border: "1px solid #1677ff" }}
            />
          </div>
        </Header>

        <Content className="px-12 m-5">
          <div className="bg-white dark:bg-gray-800 p-6 max-h-svh">
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>Developed by Susmita</Footer>
      </Layout>
    )
  );
}
