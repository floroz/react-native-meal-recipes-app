import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const MealList = ({ data, navigation }) => {
  const { navigate } = navigation;

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
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={renderMealRecipe}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
