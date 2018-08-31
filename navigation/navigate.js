import React from 'react';
import ProductList from "./components/productList";
import ProductSearch from "./components/productSearch";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const AppStack = createStackNavigator(
  {
    main: ProductList,
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "grey"
      },
      headerTintColor: "yellow"
    }
  }
);

// const AppStack1 = createStackNavigator(
//   {
//     main: ProductSearch,
//   },
//   {
//     navigationOptions: {
//       headerTitle: "Product Manager",
//       headerStyle: {
//         backgroundColor: "grey"
//       },
//       headerTintColor: "yellow"
//     }
//   }
// );

const AppNavigator = createBottomTabNavigator(
  {
  List1: AppStack,
  List2: AppStack,
},
{
  navigationOptions: {
    tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
  }
}
);

export default AppNavigator;
