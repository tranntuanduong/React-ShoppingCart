import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
        var {cart, onChangeQuantity, onDeleteCartItem} = this.props;
        var cartElement = cart.map((cartItem, index) => {
            return (
                <CartItem 
                    cartItem={cartItem}
                    key={index}
                    onChangeQuantity={onChangeQuantity}
                    onDeleteCartItem={onDeleteCartItem}>
                </CartItem>
            )
        })
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <CartItem></CartItem>
                            <CartItem></CartItem>
                            <CartItem></CartItem> */}
                            {cartElement}
                            <CartResult totalMoney={this.showTotalMoney(cart)}>
                            </CartResult>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    };

    showTotalMoney = (cart) => {
        var totalMoney = 0;
        for(var i = 0; i < cart.length; i++) {
            totalMoney += cart[i].product.price * cart[i].quantity;
        }
        return totalMoney;
    }
}

export default Cart;
