import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { DetailsHeader } from "../../Components/DetailsPageHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/Navigation";
import { RouteProp } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "DetailsPage"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "DetailsPage">;

type DetailsPageProps = {
  navigation: HomeScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const SUB_CATEGORIES = gql`
  query getSubCategories($categoryId: String) {
    subCategories(where: { category: { id_eq: $categoryId } }) {
      name
      scientific_name
      farm_methods
      id
      description
      life_span
      breed_types
      gestation_period
      fertilizer_feed
      avg_height
      avg_weight
      miscellaneous
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
const DetailsPage = ({ route, navigation }: DetailsPageProps) => {
  const { categoryId, imageUrl } = route.params;
  const { loading, error, data } = useQuery(SUB_CATEGORIES, {
    variables: {
      categoryId: categoryId,
    },
  });
  console.log("loading, data", loading, data, error);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DetailsHeader name={"D"} imageUrl={imageUrl} />
      <Text>Home Page</Text>
    </SafeAreaView>
  );
};
DetailsPage.sharedElements = (route: any, otherRoute: any, showing: any) => {
  const { imageUrl } = route.params;
  return [`${imageUrl}`];
};
export default DetailsPage;

const styles = StyleSheet.create({});
