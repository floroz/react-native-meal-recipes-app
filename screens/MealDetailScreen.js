import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log("marked as favourite")}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
