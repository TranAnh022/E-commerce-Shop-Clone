import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

  return (
      <div className='checkoutProduct'>
          <img
              className='checkoutProduct__image'
              src={image}
              alt="" />
          <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">
                  <strong> {title}</strong>
                     
              </p>
              <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="checkoutProduct__rating">
                  {Array(rating)
                      .fill()
                      .map(()=>(
                        <StarIcon className='checkoutProduct__icon'/>
                      ))}
              </div>
              <button onClick={removeFromBasket}>Remove the product</button>
          </div>
    </div>
  )
}

export default CheckoutProduct