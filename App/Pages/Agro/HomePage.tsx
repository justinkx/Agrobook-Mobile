import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import HomeHeader from "../../Components/HomeHeader";
import CategoryCard from "../../Components/CategoryCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/Navigation";
import { Category } from "../../Components/CategoryCard";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomePage"
>;
type HomePageProps = {
  navigation: HomeScreenNavigationProp;
};
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
const HomePage = ({ navigation }: HomePageProps) => {
  const { loading, error, data } = useQuery(CATEGORIES);
  const { height: deviceHeight } = useWindowDimensions();
  console.log("data", data);
  const renderItem = ({ item }: renderType) => {
    return (
      <CategoryCard
        onCategorySelect={(
          id: string,
          imageUrl: string,
          name: string,
          description: string
        ) =>
          navigation.push("SubCategoryPage", {
            categoryId: id,
            imageUrl: imageUrl,
            name,
            description,
          })
        }
        category={item}
      />
    );
  };
  const onHeaderLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    headerHeight.current = height;
  };
  const headerHeight = useRef(100);

  const [filteredCategories, setCategories] = useState<Category[] | null>(
    data.categories ? data.categories : null
  );
  useEffect(() => {
    setCategories(data.categories);
  }, [data]);
  const onSearchValueChange = useCallback((value) => {
    const _filteredCategories = data.categories.filter((cat: Category) =>
      cat.name.includes(value)
    );
    setCategories(_filteredCategories);
  }, []);
  if (loading) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
        onLayout={(event) => onHeaderLayout(event)}
      >
        <HomeHeader onTextChange={onSearchValueChange} />
      </TouchableWithoutFeedback>
      <View style={{ position: "relative", flex: 1 }}>
        {filteredCategories && (
          <FlatList
            style={{
              flex: 1,
              position: "absolute",
              top: -30,
              maxHeight: deviceHeight - headerHeight.current,
              width: "100%",
              bottom: 0,
            }}
            contentContainerStyle={[styles.contentContainerStyle]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            data={filteredCategories}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
