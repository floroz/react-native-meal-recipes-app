import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const { getParam } = navigation;
  const catId = getParam("categoryId");

  const displayedMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return <MealList data={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  return {
    title: getParam("categoryTitle"),
  };
};

export default CategoryMealsScreen;
