import { ApolloClient } from "apollo-client";
import { split, ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import withApollo from "next-with-apollo";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
import { SERVER, WEB_SOCKET_LINK } from "../configs/constants";

interface Definintion {
  kind: string;
  operation?: string;
}

let authToken: string | null = null;

const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null,
    },
  });
  (operation as any & { authToken: string | undefined }).authToken = authToken;

  return forward(operation);
});

const webSocketLink: any =
  typeof window !== "undefined"
    ? new WebSocketLink({
        uri: WEB_SOCKET_LINK,
        options: {
          reconnect: true,
        },
      })
    : null;

const link =
  typeof window !== "undefined"
    ? split(
        ({ query }) => {
          const { kind, operation }: Definintion = getMainDefinition(query);
          return kind === "OperationDefinition" && operation === "subscription";
        },
        webSocketLink,
        httpLink
      )
    : httpLink;

const withApolloClient = withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: concat(authMiddleware, link),
      cache: new InMemoryCache().restore(initialState || {}),
    })
);

export default withApolloClient;
