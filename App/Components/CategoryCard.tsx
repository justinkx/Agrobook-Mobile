import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoading } from "expo";
import {
  useFonts,
  CormorantGaramond_500Medium,
} from "@expo-google-fonts/cormorant-garamond";
import { Gotu_400Regular } from "@expo-google-fonts/gotu";

type propTypes = {
  category: any;
};
const CategoryCard = ({ category }: propTypes) => {
  console.log("category", category.image[0].formats.small.url);
  const [fontsLoaded] = useFonts({
    Gotu_400Regular,
    CormorantGaramond_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity style={[styles.container]}>
        <View style={[styles.contentContainer]}>
          {category.image[0].formats.small && (
            <Image
              style={{
                width: 200,
                height: 160,
                position: "absolute",
                right: 0,
                top: 0,
                opacity: 0.55,
                borderRadius: 20,
              }}
              source={{ uri: category.image[0].formats.small.url }}
            />
          )}
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
        </View>
      </TouchableOpacity>
    );
  }
};

export default memo(CategoryCard);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    padding: 20,
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
  },
  name: {
    fontSize: 18,
    color: "black",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    zIndex: 1000,
  },
  left: {
    width: "40%",
  },
  right: {
    width: "45%",
  },
});
