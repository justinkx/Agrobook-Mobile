import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import appoloClientInit from "./GraphQl/AppoloClient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [client, setClient] = useState<any>(undefined);
  useEffect(() => {
    async function init() {
      // await SplashScreen.preventAutoHideAsync();
      const appoloClient = await appoloClientInit();
      setClient(appoloClient);
    }
    init();
  }, []);
  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible
        animated
        backgroundColor={"green"}
        style="auto"
      />
      <NavigationContainer>
        {client && (
          <ApolloProvider client={client}>
            <AppNavigator />
          </ApolloProvider>
        )}
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
