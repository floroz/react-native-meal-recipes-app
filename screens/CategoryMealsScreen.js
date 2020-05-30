import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const { getParam, navigate } = props.navigation;
  const catId = getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const navigateToMealDetails = (meal) =>
    navigate({
      routeName: "MealDetails",
      params: {
        meal,
      },
    });

  const renderMealRecipe = (itemData) => {
    return <MealItem meal={itemData.item} onPress={navigateToMealDetails} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealRecipe}
        style={{ width: "100%" }}
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
    padding: 15,
  },
});
