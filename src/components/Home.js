import React from 'react';
import smartphones from '../images/sim-negro.jpg';
import smartphone2 from '../images/s20.jpg';
import smartphone3  from '../images/sim-negro.jpg';
import smartphone4  from '../images/s20.jpg';

const Home =() =>{
    return(
       <div className="container"> 
           <div className="image">
                <img src={smartphones} alt="" />
                <h3>Grey Iphone</h3>
                <h3>$ 150.00</h3>
                <a  className="addToCart cart1" href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone2} alt="" />
                <h3>Blue Samsung S8</h3>
                <h3>$ 200.00</h3>
                <a className="addToCart cart2 " href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone3} alt="" />
                <h3>smasung Note 4</h3>
                <h3>$ 199.00</h3>
                <a className="addToCart cart3" href="#">Add to Cart</a>
           </div>
           <div className="image">
                <img src={smartphone4} alt="" />
                <h3>Samsung s7</h3>
                <h3>$ 500.00</h3>
                <a className="addToCart cart4" href="#">Add to Cart</a>
           </div>
       </div>
    );
}

export default Home;