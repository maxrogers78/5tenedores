// React
import React from "react";
// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
