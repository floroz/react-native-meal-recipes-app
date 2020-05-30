import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const { getParam } = props.navigation;
  const catId = getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  return {
    title: getParam("categoryTitle"),
  };
};

export default CategoryMealsScreen;
