// React
import React from "react";
// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurants" }}
      />
      <Stack.Screen
        name="add-restaurant"
        component={Restaurants}
        options={{ title: "Add Restaurant" }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;
