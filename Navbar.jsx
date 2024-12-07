import React from 'react'
import Addcartpage from './Addcartpage';


export default function Navbar({d1}) {
    console.log(d1);
    
  return (
    <div>
      <h3>Navbar : {d1}</h3>
      <Addcartpage d2={d1}/>
    </div>
  )
}
