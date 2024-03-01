import React from 'react'
import Products from './products';

const home = () => {
  return (
    <div>
        <div className='card text-white'>
            <img className='card-img' src="src/assets/pexels-andrea-piacquadio-853151.jpg" alt="" />
        </div>
        <Products/>
    </div>
  )
}

export default home;