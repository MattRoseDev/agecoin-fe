import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { VUE_APP_BASE_URL } from "@/config";

// Create an http link:
const httpLink = createHttpLink({
  uri: `${VUE_APP_BASE_URL}/query`
});

const authLink = new ApolloLink((operation, forward) => {
  const Authorization = JSON.parse(
    localStorage.getItem("Authorization") || "null"
  );
  operation.setContext({
    headers: {
      Authorization: `Bearer ${Authorization}`
    }
  });
  return forward(operation);
});

export const defaultClient = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache()
});
