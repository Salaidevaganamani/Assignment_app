import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from "../containers/productList";
import { Provider } from "react-redux";
import store from "../store";

export default class ProductListExport extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProductList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
