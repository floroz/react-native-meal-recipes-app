import React from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={(newValue) => props.onValueChange(newValue)}
        trackColor={{ true: colors.primaryColor }}
        thumbColor={Platform.OS === "android" && colors.primaryColor}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false);
  const [isVegeterian, setIsVegeterian] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);

  const saveFilters = React.useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegeterian: isVegeterian,
      vegan: isVegan,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

  React.useEffect(() => {
    navigation.setParams({
      saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten Free"
        value={isGlutenFree}
        onValueChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose Free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <FilterSwitch
        label="Vegeterian"
        value={isVegeterian}
        onValueChange={setIsVegeterian}
      />
      <FilterSwitch label="Vegan" value={isVegan} onValueChange={setIsVegan} />
    </View>
  );
};

FiltersScreen.navigationOptions = (navOptions) => {
  return {
    title: "Filter Meals",
  };
};

FiltersScreen.navigationOptions = ({ navigation }) => {
  const saveFilters = navigation.getParam("saveFilters");

  return {
    title: "Filters",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-save" onPress={() => saveFilters()} />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
