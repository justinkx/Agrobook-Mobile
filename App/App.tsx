import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import store, { persistor } from "./Store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import appoloClient from "./GraphQl/AppoloClient";

export default function App() {
  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible
        animated
        backgroundColor={"green"}
        style="dark"
      />
      <NavigationContainer>
        <Provider store={store}>
          <ApolloProvider client={appoloClient}>
            <PersistGate persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </ApolloProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
