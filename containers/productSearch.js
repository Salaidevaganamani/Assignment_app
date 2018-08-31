import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Button } from "react-native";
import { getProducts, getSearchProduct } from "../actionCreators/product";
import { connect } from "react-redux";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SearchBar } from 'react-native-elements';

class ProductSearch extends Component {
    componentDidMount() {
        this.props.getProducts();
        this.props.getSearchProduct(this.props.products, "hello");
    }

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    _handleClick(item){
        alert('id: '+ item.id + '\n' + 'name: ' + item.title)
    }
    
    _onSearch = (itemName) => {
        console.log('--' + itemName);
        // this.props.getSearchProduct(this.props.products, "hello");
    }

    // _onSearch(text){
    //     console.log(text)
    // }
    
    _renderItem = ({item}) => (
        <TouchableOpacity onPress = {() =>this._handleClick(item)}>
            <View>
                <Text>{item.title}</Text>
                <Text>{item.rating}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { products, isLoading, fillterProducts} = this.props;
        products.sort(function(a, b){
            return a.rating - b.rating;
        })
        return (
            <View>
                <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                placeholder='Search Products' />
                 {
                    isLoading ? (
                        <ActivityIndicator size="large" color="#00ff80" />
                    ) : (
                        fillterProducts.length > 0 ?
                          <FlatList
                            data={fillterProducts}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                           
                          />
                          :
                          <FlatList
                            data={products}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                           
                          />
                      )}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        products: state.products,
        fillterProducts: state.fillterProducts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getSearchProduct: () => dispatch(getSearchProduct())
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductSearch);