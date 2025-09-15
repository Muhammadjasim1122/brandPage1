import React from 'react'
import './hero.css'

function Herosection() {
 return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="stores">
          <img src="/flipkart.png" alt="Amazon" />
          <img src="/amazon.png" alt="Flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <img
          src="shoe_image (1).png"
          alt="Nike Shoe"
        />
      </div>
    </section>
 )
}

export default Herosection