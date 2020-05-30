import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import colors from "../constants/colors";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MealList
        data={MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2")}
        navigation={props.navigation}
      />
    </View>
  );
};

FavoritesScreen.navigationOptions = (navigationOptions) => {
  if (Platform.OS !== "android") return;
  return {
    title: "Your Favorites",
    headerStyle: {
      backgroundColor: colors.accentColor,
    },
  };
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
