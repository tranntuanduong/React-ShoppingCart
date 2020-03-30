import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart'
import {actChangeQuantity, actDeleteCartItem} from './../actions/index';
class CartContainer extends Component {
    render() {
        var {cart, onChangeQuantity, onDeleteCartItem} = this.props;
        return (
            <Cart 
                cart={cart}
                onChangeQuantity={onChangeQuantity}
                onDeleteCartItem={onDeleteCartItem}>
            </Cart>
        );
    }
}

const mapStateToProps = state => {
    return {
       cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return { 
        onChangeQuantity : (product, quantity) => {
            dispatch(actChangeQuantity(product, quantity));
        },
        onDeleteCartItem : (product) => {
            dispatch(actDeleteCartItem(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
