import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/payment/Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('The USER IS >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={[<Header />,<Payment/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
