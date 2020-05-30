import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.screen}>
      <Text>Categories Meal Screen</Text>
      <Button
        title="Go To Meals Details"
        onPress={() => navigate("MealDetails")}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  return {
    title: getParam("categoryTitle"),
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
