import { gql } from '@apollo/client';

export const GET_DASHBOARD_STATS = gql`
  query GetDashboardStats {
    dashboardStats {
      totalValue
      lowStockCount
      totalProducts
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      category
      price
      stock
      status
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $category: String!, $price: Float!, $stock: Int!, $status: String!) {
    addProduct(name: $name, category: $category, price: $price, stock: $stock, status: $status) {
      id
      name
      category
      price
      stock
      status
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation EditProduct($id: ID!, $name: String, $category: String, $price: Float, $stock: Int, $status: String) {
    editProduct(id: $id, name: $name, category: $category, price: $price, stock: $stock, status: $status) {
      id
      name
      category
      price
      stock
      status
    }
  }
`;
