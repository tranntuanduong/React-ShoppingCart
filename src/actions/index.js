import * as Types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeQuantity = (cartItem, quantity) => {
    return {
        type : Types.CHANGE_QUANTITY,
        cartItem,
        quantity
    }
}

export const actDeleteCartItem = (cartItem) => {
    return {
        type : Types.DELETE_CARTITEM,
        cartItem
        
    }
}