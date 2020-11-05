// React
import React from "react";
// React Native
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import TopRestaurants from "../screens/TopRestaurants";
import Account from "../screens/Account";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{ title: "Restaurants" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favorites" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{ title: "Top Restaurants" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Account" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
