import {GET_NUMBERS_BASKET} from  './types'
export const getNumbers = () => {
    return (dispatch) => {
        console.log ("Getting all Basket Numbers");
        dispatch ({
            types: GET_NUMBERS_BASKET
        })
    }
}