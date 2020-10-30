import { ApolloClient, InMemoryCache } from "@apollo/client";

const appoloClient = new ApolloClient({
  uri: "https://agrobook-backoffice.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default appoloClient;
