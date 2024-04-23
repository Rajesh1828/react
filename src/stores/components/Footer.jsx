import React from 'react'

const Footer = () => {
  return (
    <footer className="foot">
    <div className="col-20">
      <img src="/logo.png" />
      <p>Arzooo is India's largest and fastest-growing retail tech start-up organizing the highly fragmented
        physical retail and digitalizing them. It is a B2B platform that helps small retail stores to compete
        against retail giants.</p>
    </div>
    <div className="col-20">
      <h1>Address</h1>
      <p><i className="fas fa-location-dot" style={{paddingRight: 10}} />96/1, Srinivasa Nagar, AECS Layout,
        Singasandra, Bengaluru, Karnataka 560068</p>
      <p><i className="fas fa-phone" style={{paddingRight: 10}} />99710 94095</p>
      <i className="fa-brands fa-facebook contact" />
      <i className="fa-brands fa-linkedin contact" />
      <i className="fa-brands fa-twitter contact" />
      <i className="fa-brands fa-instagram contact" />
    </div>
    <div className="col-20">
      <h1>Our Products</h1>
      <p className="prodf"><i className="fas fa-caret-right caret" />TV</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Fridge</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Laptop</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Phone</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />Washing Machine</p>
      <p className="prodf"><i className="fas fa-caret-right caret" />AC</p>
    </div>
    <div className="col-20">
      <h1>Stay Update</h1>
      <p>If you want to get information about new template published please input your email below. Don't worry,
        your email address will be protected to us.</p>
      <input className="input" type="email" placeholder="Your Email" style={{paddingLeft: 10}} />
      <button className="button1">Submit</button>
    </div>
  </footer>
  )
}


export default Footer