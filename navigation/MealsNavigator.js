import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { Platform } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" && colors.primaryColor,
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : colors.primaryColor,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: {
      screen: MealDetailScreen,
    },
  },
  defaultStackNavOptions
);

const FavoriteMealsNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const tabScreenSettings = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavoriteMealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.accentColor,
    },
  },
};

const FiltersScreenNavigator = createStackNavigator({
  Filters: { screen: FiltersScreen },
});

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenSettings, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenSettings, {
        tabBarOptions: {
          activeTintColor: colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersScreenNavigator,
});

export default createAppContainer(MainNavigator);
