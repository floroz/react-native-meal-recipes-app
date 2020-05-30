import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = ({ navigation: { getParam } }) => {
  const meal = getParam("meal");
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationOptions) => {
  const meal = navigationOptions.navigation.getParam("meal");
  return {
    title: meal.title,
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
