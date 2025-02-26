import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='Home'>
      <div className='Home-top'>
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
        <div>
          <h1>Welcome to TheMealDB</h1>
          <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
          <p>We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
          <button><span>Pay</span>Pal</button>
          <p>Click button above to upgrade free Recipe API to premium.</p>
          <p>$3 month and cancel anytime. Currently 54 supporters.</p>
        </div>
        <img src="https://www.themealdb.com/images/meal-icon.png"alt="" />
      </div>
      
      <div className='Home-bot'>
        <div className="search-box">
          <input type="text" placeholder="Search for a Meal.."/>
          <button className="search-btn"></button>
        </div>

        <div className='Home-cat'>
          <div>
            <img src="" alt="" />
            <p>Total Meals:303</p>
          </div>
          <div>
            <img src=""alt="" />
            <p>Total Ingredients:575</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Images:303</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
