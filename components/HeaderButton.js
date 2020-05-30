import React from "react";
import { StyleSheet, Platform } from "react-native";
import { HeaderButton as HeaderButtonPkg } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const HeaderButton = (props) => {
  return (
    <HeaderButtonPkg
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primaryColor}
    />
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
