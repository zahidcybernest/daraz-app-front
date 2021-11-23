import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes,   } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './components/redux/store';

import Header from './components/common/user/header';
import Footer from './components/common/user/footer';
import Index from './components/User';
import Shop from './components/User/shop';
import Cart from './components/User/cart';
import Checkout from './components/User/checkout';
import Login from './components/common/login';
import Register from './components/common/register';
import TrackingOrder from './components/User/tracking-order';
import Category from './components/User/category';
import SingleProductDetail from './components/User/single-product-detail';
import UserContainer from './components/userContainer';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  let userType = ''
  if (userToken){
     userType = userToken.data.role_id
  }
  
  console.log(userToken);
  console.log(userType);
  return {userToken,userType}
}

function App() {
  const tokenObj = getToken();
  const curUrl = window.location.pathname
  const userType = tokenObj.userType;
  const token = tokenObj.userToken;
  console.log(userType);
  console.log(token);


  if(!token && curUrl == '/login' ) {
    console.log(curUrl)
    return <Login setToken={setToken} />
  }
  if(!token && curUrl == '/register' ) {
    return <Register setToken={setToken} />
  }
  
  return (
    <Provider store = {store}>
    <div className="App">
      <Header/>
     <Router >
        <Routes>
          
          <Route exact path="/" element={<Index/>} />
          {/* <Route exact path="login" element={<Login/>} /> */}
          {/* <Route exact path="register" element={<Register/>} /> */}
          <Route exact path="single-product-detail" element={<SingleProductDetail/>} />
          <Route exact path="shop" element={<Shop/>} />
          <Route exact path="cart" element={<Cart/>} />
          <Route exact path="checkout" element={<Checkout/>} />
          <Route exact path="tracking-order" element={<TrackingOrder/>} />
          <Route exact path="category" element={<Category/>} />
          <Route exact path="user" element={<UserContainer/>} />
         
        </Routes>
      </Router>

      <Footer/>
    </div>
     </Provider>
  );
}

export default App;
