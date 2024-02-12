import React from 'react'

import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    
    <div className='main'>
         <div className='logoblock'>
            <img src="data:https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg" alt="" />
            <h1 className='tracking-in-expand'>JUSTSTORE</h1>
        </div >
         <Link to="/product" id='links'>Product</Link>
      
        <Link to="/cart" id='links'>Cart</Link>
        <div className="offer">
        <Link to="/login" id='links'>Login</Link>
        </div>
        
    </div>
    <div className="back">
      
    </div>
    
    </>
  )
}

export default Nav
