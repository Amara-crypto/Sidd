import React, {Fragment} from 'react';
import { connect} from 'react-redux'

import smartphones from '../images/sim-negro.jpg';
import smartphone2 from '../images/s20.jpg';
import smartphone3  from '../images/sim-negro.jpg';
import smartphone4  from '../images/s20.jpg';   
function Cart(basketProps){
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.product).forEach (function(item){
        console.log(item)
        console.log(basketProps.product[item].inCart);
        if (basketProps.products[item].inCart ){
            productsInCart.push(basketProps.product[item])
        }
        console.log(productsInCart)
    });

    const productImages = []

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        return (
            <Fragment>
                <div className="product"><ion-icon name="close-circle"><img src={productImages[index]}/></ion-icon>
                    <span className="sm.hide">{product.name}</span>
                </div>
                <div className="sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon className="increase" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon className="decrease" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers *product.price},00</div>
            </Fragment>
        )})

    return (
        <div>
            <h1>this is cart</h1>
        </div>
    )
} 
    const mapStateToProps = state => ({
        basketProps: state.basketState
    });

export default connect(mapStateToProps) (Cart)