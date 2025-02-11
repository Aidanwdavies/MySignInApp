import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation"; // Import the navigation setup

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}