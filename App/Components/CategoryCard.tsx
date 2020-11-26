import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoading } from "expo";
import {
  useFonts,
  CormorantGaramond_500Medium,
} from "@expo-google-fonts/cormorant-garamond";
import { Gotu_400Regular } from "@expo-google-fonts/gotu";
import { Image } from "react-native-expo-image-cache";
import { colors } from "../Util/Theme";
import { imageHelper } from "../Util/CloudinaryHelper";
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

export type Category = {
  name: string;
  id: string;
  description: string;
  image: any[];
  __typename: string;
};
type propTypes = {
  category: Category;
  onCategorySelect: (id: string, imageUrl: string) => void;
};

const CategoryCard = ({ category, onCategorySelect }: propTypes) => {
  const { height, width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Gotu_400Regular,
    CormorantGaramond_500Medium,
  });
  const uri = useMemo(() => {
    return imageHelper(category.image[0]);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        onPress={() => onCategorySelect(category.id, uri)}
        activeOpacity={0.5}
        style={[styles.container]}
      >
        {category.image[0].formats && (
          <SharedElement style={{ ...StyleSheet.absoluteFillObject }} id={uri}>
            <Image
              blurRadius={0.65}
              style={[
                styles.imageBackground,
                {
                  width: width - 32,
                },
              ]}
              uri={uri}
            />
          </SharedElement>
        )}
        <View style={[styles.contentContainer]}>
          <Text
            style={[
              styles.name,
              {
                fontFamily: "Gotu_400Regular",
              },
            ]}
            allowFontScaling={false}
          >
            {category.name}
          </Text>
          <AntDesign
            style={[styles.rightIcon]}
            name="rightcircle"
            size={28}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  }
};

export default memo(CategoryCard);

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    color: colors.white,
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: colors.black,
    textShadowRadius: 4,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
    top: 100 - 14,
  },
});
