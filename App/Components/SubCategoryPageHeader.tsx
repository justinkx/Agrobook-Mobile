import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, Gotu_400Regular } from "@expo-google-fonts/gotu";
import { SharedElement } from "react-navigation-shared-element";
import { colors } from "../Util/Theme";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-expo-image-cache";

type Props = {
  imageUrl: string;
  name: string;
  id: string;
  description: string;
};

export const SubCategoryPageHeader = memo(
  ({ imageUrl = "", name = "", id = "", description = "" }: Props) => {
    const [fontsLoaded] = useFonts({
      Gotu_400Regular,
    });
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: height * 0.2,
              width: width,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              width: 35,
            }}
          >
            <Ionicons
              backgroundColor="transparent"
              underlayColor={"transparent"}
              onPress={() => navigation.goBack()}
              name="ios-chevron-back-sharp"
              size={28}
              color={colors.black}
            />
          </TouchableOpacity>

          <View
            style={[
              {
                width: width - 35,
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingHorizontal: 10,
              },
            ]}
          >
            <View
              style={[
                {
                  width: "55%",
                  height: "100%",
                  paddingRight: 10,
                },
              ]}
            >
              <SharedElement id={`name-${id}`}>
                <Text
                  style={[
                    {
                      fontFamily: "Gotu_400Regular",
                      fontSize: 16,
                      color: colors.black,
                    },
                  ]}
                  allowFontScaling={false}
                >
                  {name}
                </Text>
              </SharedElement>
              <Text>{description}</Text>
            </View>
            <View
              style={[
                {
                  width: "45%",
                  height: "100%",
                },
              ]}
            >
              <SharedElement id={imageUrl}>
                <Image
                  style={[
                    {
                      width: "100%",
                      height: height * 0.15,
                      borderRadius: 10,
                      resizeMode: "cover",
                    },
                  ]}
                  uri={imageUrl}
                />
              </SharedElement>
            </View>
          </View>
        </View>
      );
    }
  }
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    color: colors.white,
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: colors.black,
    textShadowRadius: 4,
  },
});
