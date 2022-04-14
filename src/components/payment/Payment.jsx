import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import './Payment.css'
import CurrencyFormat from 'react-currency-format';
import getBasketTotal from '../../redux/getBasketTotal';
import axios from '../../axios'
import {db} from '../../firebase'

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the spectial stripe secret with allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('The Secret is >>>', clientSecret)

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate("/orders");
        })

    }

    const handleChange = e => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
      <div className='payment'>
          <div className="payment__container">
              <h1>
                  Checkout (<Link to="/checkout">{basket?.length} items</Link>)
              </h1>
              <div className="payment__section">
                  <div className="payment__title">
                      <h3> Delivery Address</h3>
                  </div>
                  <div className="payment__address">
                      <p>{user?.email}</p>
                      <p>12-14 Olympiakatu </p>
                      <p>65100 VAASA FINLAND </p>
                  </div>
              </div>
              <div className="payment__section">
                  <div className="payment__title">
                      <h3> Review items and delivery</h3>
                  </div>
                  <div className="payment__items">
                      {basket.map(item => (
                          <CheckoutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                          />
                        ))}
                  </div>
              </div>
              <div className="payment__section">
                  <div className="payment__title">
                      <h3>Payment Method</h3>
                  </div>
                  <div className="payment__details">
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />
                          
                          <div className="payment__priceContainer">
                          <CurrencyFormat
                                renderText={(value) => (
                                    <h3> Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} // Part of the homework
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />
                              <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>
                              
                                    
                              {error && <div>{error}</div>}
                          </div>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Payment