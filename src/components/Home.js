import React, {useState} from 'react';
import smartphones from '../images/sim-negro.jpg';
import smartphone2 from '../images/s20.jpg';
import smartphone3  from '../images/sim-negro.jpg';
import smartphone4  from '../images/s20.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';

const Home =(props) =>{
     console.log(props)

    return(
       <div className="container"> 
           <div className="image">
                <img src={smartphones} alt="Black Iphone" />
                <h3>Grey Iphone</h3>
                <h3>$ 150.00</h3>
                <a onClick={props.addBasket}className="addToCart cart1" href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone2} alt="Blue S8" />
                <h3>Blue Samsung S8</h3>
                <h3>$ 200.00</h3>
                <a onClick={props.addBasket} className="addToCart cart2 " href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone3} alt="Black Note 4" />
                <h3>smasung Note 4</h3>
                <h3>$ 199.00</h3>
                <a onClick={props.addBasket} className="addToCart cart3" href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone4} alt="S7" />
                <h3>Samsung s7</h3>
                <h3>$ 500.00</h3>
                <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
           </div>
           
       </div>
    );
}

export default connect(null,{addBasket})(Home);