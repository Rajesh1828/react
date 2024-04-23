import React, { useState } from 'react'
import Navbar from '../components/Navbar';

export default function wmbuy() {
     const [price, setPrice] = useState(12999);
     const [quantity,setQuantity]  = useState(1);
     const [addprice, setAddiPrice] = useState(99);
     
     const [totalfee, setTotalFee] = useState(price + addprice);
     

     const haddleInc = ()=>{
       setQuantity(quantity+1);
       setTotalFee(totalfee+price);

     }
     const haddleDec = () =>{
        setQuantity(quantity-1);
        setTotalFee(totalfee - price);
     }

  return (
   <div>
 <Navbar/>
  <div className="container">
    <div className="col-40">
      <p style={{paddingLeft: 10}}><i className="fa-solid fa-truck" style={{padding: '0px 10px 10px 0px'}} />Estimated
        Delivery</p>
      <hr />
      <div>
        <div className="col-3">
          <img className="img8" src="/" alt="wm" />
        </div>
        <div className="col-4">
          <h4 style={{marginTop:'10px'}}>Washing Machine</h4>
          <p><i className="fas fa-indian-rupee-sign" />{price}</p>
          <p>Size : Free Size</p>
          <p style={{marginBottom:'10px'}}>Quantity : {quantity}</p>
        </div>
      </div>
      <hr />
      <h3><i className="fa-solid fa-location-dot" style={{fontSize: 'medium', padding: '15px 10px 15px 10px'}} />Delivery
        Address
      </h3>
    </div>
    <div className="col-30">
      <h3>Price Details</h3>
      <div className="col-5">
        <p className="p">Product Price</p>
      </div>
      <div className="col-6">
        <p className="p" style={{float: 'right'}}>+<i className="fas fa-indian-rupee-sign" />{price}</p>
      </div>
      <div className="col-5">
        <p className="p">Additional Fees</p>
      </div>
      <div className="col-6">
        <p className="p" style={{float: 'right'}}>+<i className="fas fa-indian-rupee-sign" />{addprice}</p>
      </div>
      <hr />
      <div className="col-5">
        <p className="p" style={{fontSize: 'larger'}}>Total Price</p>
      </div>
      <div className="col-6">
        <p className="p" style={{fontSize: 'larger', float: 'right'}}><i className="fas fa-indian-rupee-sign" style={{fontSize: 'medium'}} />{totalfee}
        </p>
      </div>
      <div className="button4">
        <button className='ba'  onClick={haddleDec}><b>-</b></button>
        <button className='ba'><b>{quantity}</b></button>
        <button className='ba' id= "inc" onClick={haddleInc}><b>+</b></button>
      </div>
      <a href="continue.html">
        <button className="button5"><b>Continue</b></button>
      </a>
    </div>
  </div>
  {/* <footer className="foot">
    <div className="col-20">
      <img src="/logo.png" />
      <p>Arzooo is India's largest and fastest-growing retail tech start-up organizing the highly fragmented
        physical retail and digitalizing them. It is a B2B platform that helps small retail stores to compete
        against retail giants.</p>
    </div>
    <div className="col-20">
      <h1 style={{marginTop: 0}}>Address</h1>
      <p><i className="fas fa-location-dot" style={{paddingRight: 10}} />96/1, Srinivasa Nagar, AECS Layout,
        Singasandra, Bengaluru, Karnataka 560068</p>
      <p><i className="fas fa-phone" style={{paddingRight: 10}} />99710 94095</p>
      <i className="fa-brands fa-facebook contact" />
      <i className="fa-brands fa-linkedin contact" />
      <i className="fa-brands fa-twitter contact" />
      <i className="fa-brands fa-instagram contact" />
    </div>
    <div className="col-20">
      <h1 style={{marginTop: 0}}>Our Products</h1>
      <p className="prodf"><i className="fas fa-caret-right caret" />TV</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Fridge</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Laptop</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Phone</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Washing Machine</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />AC</p>
    </div>
    <div className="col-20">
      <h1 style={{marginTop: 0}}>Stay Update</h1>
      <p>If you want to get information about new template published please input your email below. Don't worry,
        your email address will be protected to us.</p>
      <input className="input" type="email" placeholder="Your Email" style={{paddingLeft: 10}} />
      <button className="button1">Submit</button>
    </div>
  </footer> */}
</div>
  )
}