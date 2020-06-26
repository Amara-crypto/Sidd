import React from 'react';
import {connect } from 'react-redux'
import{getNumbers} from '../actions/getAction';

function Navbar(props){
  console.log(props);
    return(
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
            <ion-icon name="cart-outline"></ion-icon>
              Cart<span></span></li>
          </ul>
        </nav>
      </header>
    );
}

const mapStateToProps = state => ({
   basketProps: state.basketState
})

export default  connect (mapStateToProps, { getNumbers })(Navbar);