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

    const productImages = [smartphones, smartphone2, smartphone3, smartphone4]

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment>
                <div className="product"><ion-icon name="close-circle"></ion-icon> <img src={productImages[index]} alt="description of phones"/>
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
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5> 
                <h5 className="price-sm-hide">PRICE</h5> 
                <h5 className="quantity">QUANTITY</h5> 
                <h5 className="total">TOTAL</h5> 
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total </h4>
                <h4 className="basketTotal">{basketProps.cartcost},00 </h4>
            </div>
        </div>
    )
} 
    const mapStateToProps = state => ({
        basketProps: state.basketState
    });

export default connect(mapStateToProps) (Cart)