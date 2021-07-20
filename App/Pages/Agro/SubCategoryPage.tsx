import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { SubCategoryPageHeader } from "../../Components/SubCategoryPageHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/Navigation";
import { RouteProp } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SubCategoryPage"
>;
type SubCategoryRouteProp = RouteProp<RootStackParamList, "SubCategoryPage">;

type SubCategoryPageProps = {
  navigation: HomeScreenNavigationProp;
  route: SubCategoryRouteProp;
};

const SUB_CATEGORIES = gql`
  query getSubCategories($categoryId: String) {
    subCategories(where: { category: { id_eq: $categoryId } }) {
      name
      scientific_name
      id
      description
      image {
        formats
      }
      category {
        name
        description
        image {
          formats
        }
      }
    }
  }
`;
const SubCategoryPage = ({ route, navigation }: SubCategoryPageProps) => {
  const { categoryId, imageUrl, name, description } = route.params;
  const { loading, error, data } = useQuery(SUB_CATEGORIES, {
    variables: {
      categoryId: categoryId,
    },
  });
  console.log("loading, data", loading, data, error);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SubCategoryPageHeader
        id={categoryId}
        name={name}
        imageUrl={imageUrl}
        description={description}
      />
      <Text>Home Page</Text>
    </SafeAreaView>
  );
};
SubCategoryPage.sharedElements = (
  route: any,
  otherRoute: any,
  showing: any
) => {
  const { imageUrl, categoryId } = route.params;
  return [`${imageUrl}`, `name-${categoryId}`];
};
export default SubCategoryPage;

const styles = StyleSheet.create({});
