import { useState } from "react"
import Navbar from "./Navbar"
export default function Homepage(){

let[data,setData]=useState(0)
function change(){
    setData(data+1)
}

return(
<>
<button onClick={change}>Add</button>
<h2>Homepage :{data}</h2>
<Navbar d1={data}/>
</>
)
}