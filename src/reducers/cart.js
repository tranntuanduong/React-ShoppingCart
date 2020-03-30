import * as Types from '../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('cart'));
var initalState = data ? data : [];

var myReducer = (state = initalState, action) => {
    var index;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, action.product);
            if(index !== -1) {    
                state[index].quantity += action.quantity;
            }else {
                state.push({
                    product : action.product,
                    quantity : action.quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];

        case Types.CHANGE_QUANTITY:
            index = findProductInCart(state, action.cartItem.product);
            if(index !== -1) {    
                state[index].quantity += action.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];

        case Types.DELETE_CARTITEM:
            index = findProductInCart(state, action.cartItem.product);
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        default: return state;
    }
};

var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default myReducer;