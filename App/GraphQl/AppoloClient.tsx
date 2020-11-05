import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";
import FSStorage from "redux-persist-expo-fs-storage";

// const appoloClient = new ApolloClient({
//   uri: "https://agrobook-backoffice.herokuapp.com/graphql",
//   cache: new InMemoryCache(),
// });
async function appoloClientInit() {
  const cache = new InMemoryCache();
  const appoloClient = new ApolloClient({
    uri: "https://agrobook-backoffice.herokuapp.com/graphql",
    cache: cache,
  });
  await persistCache({
    cache: cache,
    storage: FSStorage(),
  });

  return appoloClient;
}
export default appoloClientInit;
