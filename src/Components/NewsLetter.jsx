import React from 'react'
import "./Newsletter.css"

const NewsLetter = () => {
  return (
    <div className="newsletter">
    <h3>GET REGULAR UPDATES FROM MY SIDE, BY SIGNING UP FOR MY NEWSLETTER.</h3>
    <div className="newsletter-form">
        <input type="text" placeholder="First Name"/>
        <input type="email" placeholder="Email"/>
        <button>SUBSCRIBE</button>
    </div>
</div>
  )
}

export default NewsLetter
