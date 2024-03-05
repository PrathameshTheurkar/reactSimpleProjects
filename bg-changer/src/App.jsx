import { useState } from "react"
import './App.css'
function App() {
   const [color , setColor] = useState('black');



  return (
    <div>
      <div className="container" style={{backgroundColor : color }}>
      <div className = "colors">
       <button onClick={()=>setColor('white')} style={{backgroundColor : "white"}}>white</button>        
       <button onClick={()=>setColor('black')} style={{backgroundColor : "black" , color : "white"}}>black</button>        
       <button onClick={()=>setColor('yellow')} style={{backgroundColor : "yellow"}}>yellow</button>        
       <button onClick={()=>setColor('green')} style={{backgroundColor : "green"}}>green</button>        
       </div>
       </div>

       

    </div>
  )
}

export default App
