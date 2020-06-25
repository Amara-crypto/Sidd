import React from 'react';

function Navbar(){
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
              Cart</li>
          </ul>
        </nav>
      </header>
    );
}
export default Navbar