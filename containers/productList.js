import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { getProducts } from "../actionCreators/product";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

class ProductList extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    _handleClick(item){
        alert('id: '+ item.id + '\n' + 'name: ' + item.title)
    }

    _renderItem = ({item}) => (
    <TouchableOpacity onPress = {() =>this._handleClick(item)}>
        <View>
        <Text>{item.price}</Text>
        </View>
    </TouchableOpacity>
    );

    render() {
        const { products, isLoading} = this.props;
        // products.map(p => {console.log(p.price)});
        products.sort(function(a, b){
            return b.price - a.price;
        }) 
        return (
            <View style={styles.container}>
                {isLoading && <ActivityIndicator size="large" color="green" style={{alignItems: "center"}}/>}
                <FlatList
                data={products}
                keyExtractor = {this._keyExtractor}
                renderItem = {this._renderItem}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts())
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
)(ProductList);