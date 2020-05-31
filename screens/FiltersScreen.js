import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navOptions) => {
  return {
    title: "Filter Meals",
  };
};

FiltersScreen.navigationOptions = ({ navigation }) => {
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
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
