import addBasket from  '../actions/addAction';
import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET} from '../actions/types';
const initialState = {
    basketNumbers:0,
    cartCost: 0,
    products:{
        Samsung: {
            name:"Samsung",
            price:30000,
            numbers:0,
            inCart:false
        },
        Iphone:{
            name:"Iphone",
            price:4000,
            number:0,
            inCart:false
        },
        Nokia:{
            name:"Nokia",
            price:500,
            number:0,
            inCart:false
        },
        SamsungS9 :{
            name:"S9",
            price:"900",
            numbers:0,
            inCart:false
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            return {
                basketNumbers:state.basketNumbers + 1
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }    

        default:
            return state;
    }
}