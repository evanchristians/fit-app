import { InMemoryCache, gql, ApolloClient } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const GET = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      currency
      name
    }
  }
`;
