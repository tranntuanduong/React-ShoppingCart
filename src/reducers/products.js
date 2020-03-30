// import * as Types from '../constants/ActionTypes'
var initalState = [
    {   
        id : 1,
        image : '/img/HH0H2.jfif',
        name : 'Iphone 6s',
        rating : 4,
        description : 'Sản phẩm do apple sản xuất',
        price : 15
    },
    {
        id : 2,
        image : '/img/samsung.jpg',
        name : 'Samsung Galaxy',
        rating : 2,
        description : 'Sản phẩm do samsung sản xuất',
        price : 10
    },
    {
        id : 3,
        image : '/img/vertu-k8.jpg',
        name : 'Vertu-k8',
        rating : 5,
        description : 'Sản phẩm dành cho người nhiều tiền',
        price : 2000
    },
    
    
];


var myReducer = (state = initalState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default myReducer;