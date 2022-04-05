import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

const Products = ({title,price,image,rating}) => {
  return (
      <div className='product'>
          <div className="product__info">
              <p>{ title}</p>
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="product__rating">
                  {Array(rating).fill().map((_, i) => (
                      <p><StarIcon/></p>
                  ))}
                  <p></p>
              </div>
          </div>
          <img
              src={image}
              alt="" />
          <button>Add to Basket</button>
    </div>
  )
}

export default Products