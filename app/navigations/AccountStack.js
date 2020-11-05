// React
import React from "react";
// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Account from "../screens/Account";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
