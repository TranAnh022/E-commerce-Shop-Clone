import React from 'react'
import Products from '../products/Products'
import './Home.css'
const Home = () => {
  return (
      <div className='home'>
          <div className="home__container">
            <img
                  className='home__image'
                  src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                  alt="" />
              
        <div className="home__row">
          <Products
            id="12321341"
            title="WD 14TB Elements Desktop Hard Drive HDD, USB 3.0, Compatible with PC, Mac, PS4 & Xbox - WDBWLG0140HBK-NESN"
            price={239.99}
            image="https://m.media-amazon.com/images/I/61LoGZq-4NL._AC_SX679_.jpg"
            rating={5}
          />
          <Products
          id="49538094"
          title="HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)"
          price={89.00}
          image="https://m.media-amazon.com/images/I/51q-aP4aNrL._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Products
             id="4903850"
          title="Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for PC, Laptop, Black"
            price={20.99}
          image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SX679_.jpg"
          rating={3}
          />
        </div>
        <div className="home__row">
          <Products
             id="23445930"
          title="iPhone Charger, TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 13/12/11 Pro Max/XS MAX/XR/XS/X/8/7/Plus/6S/6/SE/5S/iPad"
          price={9.99}
          image="https://m.media-amazon.com/images/I/71m-EsCA2aL._SX522_.jpg"
            rating={5}
          />
          <Products
               id="3254354345"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
          price={198.89}
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Products
          id="90829332"  
          title="Logitech M510 Wireless Computer Mouse for PC with USB Unifying Receiver - Graphiter"
          price="26.90"
          image="https://m.media-amazon.com/images/I/61xgpXecLML._AC_SX679_.jpg"
            rating={5}
          />  
        </div>
      </div>    
    </div>
  )
}

export default Home

