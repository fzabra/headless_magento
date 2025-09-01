import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GRAPHQL_URI =
  process.env.NEXT_PUBLIC_MAGENTO_GRAPHQL ||
  process.env.NEXT_PUBLIC_MAGENTO_GRAPHQL_ENDPOINT ||
  '/api/m2/graphql';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URI,
    fetchOptions: { method: 'POST' },
    headers: { 'Content-Type': 'application/json' },
  }),
  cache: new InMemoryCache(),
});
