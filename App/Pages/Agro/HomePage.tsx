import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
      image {
        formats
      }
    }
  }
`;
const HomePage = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  console.log("data", data);
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Page</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
