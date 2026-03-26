import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const getApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: '/api/graphql', 
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            products: {
              merge(existing, incoming) {
                return incoming; // Replace existing with incoming on fetch to ensure we see mock mutation changes easily
              },
            },
          },
        },
      },
    }),
  });
};
