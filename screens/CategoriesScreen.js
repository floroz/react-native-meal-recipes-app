import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const { navigate } = props.navigation;

  const navigateToCategoryMeals = (itemData) => {
    navigate({
      routeName: "CategoryMeals",
      params: {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      },
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={navigateToCategoryMeals.bind(this, itemData)}
      />
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
