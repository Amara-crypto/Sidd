import React, {useState} from 'react';
import smartphones from '../images/sim-negro.jpg';
import smartphone2 from '../images/s20.jpg';
import smartphone3  from '../images/sim-negro.jpg';
import smartphone4  from '../images/s20.jpg';
import {connect} from 'react-redux';
import addBasket from '../actions/addAction';
const items = [{name: 'Samsung', price:30000, image:smartphones},
{name: 'Iphone', price:40000, image:smartphone2},
{name: 'Nokia', price:50000, image:smartphone3},
{name: 'Samsung S9', price:90000, image:smartphone4},
]

class Home extends React.Component {
     // eslint-disable-next-line no-useless-constructor
   
     handleClick = (name)=>{this.props.addBasket(name);
     }
     render(){
          return(
               <div className="container"> 
               {items.map((item)=>(
                    <div className="image">
                         <img src={item.image} alt={item.name} />
                         <h3>{item.name}</h3>
                         <h3>{item.price}</h3>
                         <a onClick={()=>{this.handleClick(item.name)}} className="addToCart cart1" href="#">Add me to Cart</a>
                    </div>
               ))}

               </div>

          )
     }

}

export default connect(null,{addBasket})(Home);
