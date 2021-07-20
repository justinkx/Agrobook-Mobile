import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomePage from "../Pages/Agro/HomePage";
import SubCategoryPage from "../Pages/Agro/SubCategoryPage";
import DetailsPage from "../Pages/Agro/DetailsPage";
import ToolsPage from "../Pages/Tools/ToolsPage";
import { enableScreens } from "react-native-screens";

export type RootStackParamList = {
  HomePage: undefined;
  SubCategoryPage: {
    categoryId: string;
    imageUrl: string;
    name: string;
    description: string;
  };
  DetailsPage: { subCategoryId: string };
  ToolsPage: undefined;
};
const Stack = createSharedElementStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
enableScreens();

const AgroStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen
        name="SubCategoryPage"
        component={SubCategoryPage}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                delay: 400,
              },
            },
            close: {
              animation: "timing",
              config: {
                delay: 400,
              },
            },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
      <Stack.Screen
        name="DetailsPage"
        component={DetailsPage}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                delay: 400,
              },
            },
            close: {
              animation: "timing",
              config: {
                delay: 400,
              },
            },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </Stack.Navigator>
  );
};
const ToolsStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ToolsPage" component={ToolsPage} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Agro") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Tools") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Agro" component={AgroStack} />
      <Tab.Screen name="Tools" component={ToolsStack} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="TabNavigator">
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
export default AppNavigator;
