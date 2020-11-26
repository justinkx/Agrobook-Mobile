import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { useFonts, Gotu_400Regular } from "@expo-google-fonts/gotu";
import { SharedElement } from "react-navigation-shared-element";
import { colors } from "../Util/Theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
  imageUrl: string;
  name: string;
};

export const DetailsHeader = memo(({ imageUrl = "", name = "" }: Props) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback>
      <View
        style={[
          styles.headerContainer,
          {
            height: height * 0.33,
          },
        ]}
      >
        <SharedElement style={[StyleSheet.absoluteFillObject]} id={imageUrl}>
          <Image
            blurRadius={0.2}
            style={[
              styles.imgBackGround,
              {
                height: height * 0.33,
                width: width,
              },
            ]}
            source={{ uri: imageUrl }}
          ></Image>
        </SharedElement>

        <View style={[styles.contentContainer]}>
          <Ionicons.Button
            backgroundColor="transparent"
            underlayColor={"transparent"}
            onPress={() => navigation.goBack()}
            name="ios-arrow-back"
            size={26}
            color={colors.theme}
          />
          <Text></Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  imgBackGround: {
    ...StyleSheet.absoluteFillObject,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    resizeMode: "cover",
  },

  headerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
});
