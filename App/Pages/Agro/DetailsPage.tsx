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
  "DetailsPage"
>;
type DetailsPageRouteProp = RouteProp<RootStackParamList, "DetailsPage">;

type DetailsPageProps = {
  navigation: HomeScreenNavigationProp;
  route: DetailsPageRouteProp;
};
const SUB_CATEGORIES = gql`
  query getSubCategory($subCategoryId: String) {
    subCategories(where: { id_eq: $subCategoryId }) {
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
  const { subCategoryId } = route.params;
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({});
