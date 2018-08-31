import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductSearch from "../containers/productSearch";
import { Provider } from "react-redux";
import store from "../store";

export default class ProductSearchExport extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProductSearch />
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
