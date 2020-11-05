import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import { AppLoading } from "expo";
import { useFonts, Gotu_400Regular } from "@expo-google-fonts/gotu";

const HomeHeader = () => {
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [searchValue, setSearchValue] = useState("");
  const [fontsLoaded] = useFonts({
    Gotu_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground
        style={[
          styles.imgBackGround,
          {
            height: height * 0.33,
          },
        ]}
        imageStyle={[styles.imageStyle]}
        source={require("../../Assets/Images/HomeBG.jpeg")}
      >
        <View
          style={[
            styles.headerView,
            {
              paddingTop: insets.top,
            },
          ]}
        >
          <Entypo name="menu" style={[styles.menu]} size={28} color="white" />
          <View style={[styles.contentContainer]}>
            <Text
              allowFontScaling={false}
              style={[
                styles.quotes,
                {
                  fontFamily: "Gotu_400Regular",
                },
              ]}
            >{`Let's nurture the nature so that we can have a better future`}</Text>
            <SearchBar
              onChange={(value) => setSearchValue(value)}
              value={searchValue}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default memo(HomeHeader);

const styles = StyleSheet.create({
  imgBackGround: {},
  imageStyle: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  menu: {
    marginTop: 10,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    flex: 1,
    paddingRight: 25,
  },
  quotes: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginBottom: 10,
  },
});
