import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  CormorantGaramond_500Medium,
} from "@expo-google-fonts/cormorant-garamond";
import { LinearGradient } from "expo-linear-gradient";

const height = 38;

type propTypes = {
  value: string;
  onChange: (value: string) => void;
};
const SearchBar = ({ value = "", onChange }: propTypes) => {
  let [fontsLoaded] = useFonts({
    CormorantGaramond_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styles.container]}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#6ec87d", "#469656"]}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: height / 2,
            paddingLeft: 10,
            position: "relative",
          }}
        >
          <TextInput
            placeholder={"Search"}
            placeholderTextColor="white"
            value={value}
            onChangeText={(text) => onChange(text)}
            style={[
              styles.input,
              {
                fontFamily: "CormorantGaramond_500Medium",
              },
            ]}
          />
          {value.length > 0 && (
            <TouchableOpacity
              onPress={() => onChange("")}
              style={[styles.closeButton]}
            >
              <Ionicons name="md-close-circle" size={18} color="#164344" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.button]}>
            <Feather name="search" size={18} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    borderRadius: height / 2,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 14,
  },
  button: {
    width: height,
    height: height,
    borderRadius: height / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#13722c`,
  },
  closeButton: {
    position: "absolute",
    right: height + 3,
  },
});
