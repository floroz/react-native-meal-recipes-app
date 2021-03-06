import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import colors from "../constants/colors";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No Favorite Meals found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList data={favMeals} navigation={navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  let androidOptions = {
    headerStyle: {
      backgroundColor: colors.accentColor,
    },
  };
  if (Platform.OS !== "android") androidOptions = {};
  return {
    ...androidOptions,
    title: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontFamily: "open-sans",
    fontSize: 20,
  },
});
