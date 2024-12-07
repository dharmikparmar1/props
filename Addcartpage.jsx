import React from 'react'
import Wishlistpage from './Wishlistpage'

export default function Addcartpage({d2}) {
 console.log(d2);
 
  return (
    <div>
      <h4>Addcartpage : {d2}</h4>
      <Wishlistpage d3={d2}/>
    </div>
  )
}
