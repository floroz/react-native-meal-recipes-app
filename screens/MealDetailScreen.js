import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem} {...props}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ navigation: { getParam, setParams } }) => {
  const meal = getParam("meal");
  const dispatch = useDispatch();

  const toggleFav = React.useCallback(() => {
    dispatch(toggleFavorite(meal.id));
  }, [meal.id]);

  React.useEffect(() => {
    setParams({
      toggleFav,
    });
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ing) => (
        <ListItem key={ing}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationOptions) => {
  const meal = navigationOptions.navigation.getParam("meal");
  const toggleFav = navigationOptions.navigation.getParam("toggleFav");
  return {
    title: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => toggleFav()}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  steps: {},
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
