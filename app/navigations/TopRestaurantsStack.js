// React
import React from "react";
// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Top 5 Restaurants" }}
      />
    </Stack.Navigator>
  );
};

export default TopRestaurantsStack;
