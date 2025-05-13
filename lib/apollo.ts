import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_MAGENTO_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});