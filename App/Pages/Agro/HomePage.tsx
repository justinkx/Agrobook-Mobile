import React from "react";
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import HomeHeader from "../../Components/HomeHeader";
import CategoryCard from "../../Components/CategoryCard";

type renderType = {
  item: any;
};
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
  const renderItem = ({ item }: renderType) => {
    return <CategoryCard category={item} />;
  };
  return (
    <View style={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <HomeHeader />
      </TouchableWithoutFeedback>

      {data && (
        <FlatList
          style={{
            flex: 1,
          }}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          data={data.categories}
        />
      )}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
