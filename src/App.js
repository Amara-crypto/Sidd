import React from 'react';
import './App.css';
import Cart from './components/cart';
import Navbar from  './components/Navbar';
import Home from './components/Home'
import { Provider} from 'react-redux';
import store from './components/store';
import  {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      </BrowserRouter>
     
    
    </div>
    </Provider>
  );
}

export default App;
