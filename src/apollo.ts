import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { API_URL } from "@/config";

// Create an http link:
const httpLink = createHttpLink({
  uri: API_URL
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
