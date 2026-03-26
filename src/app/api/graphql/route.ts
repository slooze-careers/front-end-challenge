import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    category: String!
    price: Float!
    stock: Int!
    status: String!
  }

  type DashboardStats {
    totalValue: Float!
    lowStockCount: Int!
    totalProducts: Int!
  }

  type Query {
    products: [Product!]!
    dashboardStats: DashboardStats!
  }

  type Mutation {
    addProduct(name: String!, category: String!, price: Float!, stock: Int!, status: String!): Product!
    editProduct(id: ID!, name: String, category: String, price: Float, stock: Int, status: String): Product!
  }
`;

// In-memory data
let products = [
  { id: '1', name: 'Premium Coffee Beans', category: 'Beverages', price: 29.99, stock: 150, status: 'Active' },
  { id: '2', name: 'Organic Honey', category: 'Pantry', price: 15.5, stock: 8, status: 'Low Stock' },
  { id: '3', name: 'Almond Milk', category: 'Dairy', price: 5.99, stock: 45, status: 'Active' },
  { id: '4', name: 'Himalayan Pink Salt', category: 'Spices', price: 8.2, stock: 0, status: 'Out of Stock' },
];

const resolvers = {
  Query: {
    products: () => products,
    dashboardStats: () => {
      const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
      const lowStockCount = products.filter((p) => p.stock < 10).length;
      return {
        totalValue,
        lowStockCount,
        totalProducts: products.length,
      };
    },
  },
  Mutation: {
    addProduct: (_: any, args: any) => {
      const newProduct = {
        id: String(products.length + 1),
        ...args,
      };
      products.push(newProduct);
      return newProduct;
    },
    editProduct: (_: any, args: any) => {
      const { id, ...updates } = args;
      const index = products.findIndex((p) => p.id === id);
      if (index === -1) throw new Error('Product not found');
      
      products[index] = { ...products[index], ...updates };
      
      // Auto-update status based on stock
      if (products[index].stock === 0) {
        products[index].status = 'Out of Stock';
      } else if (products[index].stock < 10 && products[index].status === 'Active') {
        products[index].status = 'Low Stock';
      } else if (products[index].stock >= 10 && (products[index].status === 'Low Stock' || products[index].status === 'Out of Stock')) {
        products[index].status = 'Active';
      }

      return products[index];
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
