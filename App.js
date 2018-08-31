import React from 'react';
import ProductListExport from "./components/productListExport";
import ProductSearchExport from "./components/productSearchExport";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const ListStack = createStackNavigator(
  {
    main: ProductListExport,
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "green"
      },
      headerTintColor: "#fff"
    }
  }
);

const SearchStack = createStackNavigator(
  {
    main: ProductSearchExport,
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "green"
      },
      headerTintColor: "#fff"
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
  List: ListStack,
  Search: SearchStack,
},
{
  navigationOptions: {
    tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
  }
}
);

export default AppNavigator;
