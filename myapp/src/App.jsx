import { useState } from "react";
import './App.css'
import Card from './components/Card'

function App() {

  // const evaluatedExpression = ' Prathamesh'


  let [counter , setCounter] = useState(15);

  // let counter = 15;
  const addValue = ()=>{
    console.log( `increase clicked ${counter}`)
    // counter++;
    // if(counter >= 0)
    // setCounter(counter)
    // else setCounter(1)


    // This all setCounter goes as a bunch of similar task so even though we have wrote the setCounter 5 times 
    // it only increases 1 time
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);


    // This gets the prev state of the counter and this all 5 setCounter does not work as bunch of task because 
    // until the prev setCounter is not executed we can't get the prev state of the counter just like promise
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
  }

  const removeValue = () =>{
    console.log( `decrease clicked ${counter}`)
    counter--
    // if(counter >= 0)
    setCounter(counter)
  }

  let myObj = {
    name : 'prathamesh' ,
    age : 20
  }
  return(
    // <div>
    // <h1>Prathamesh Theurkar</h1>
    //    <h3>{evaluatedExpression} ,Hi i am a student</h3>
    // </div>
    <>
      <h1 className="bg-green-400 text-black">Counter : {counter}</h1>
      <button className="p-1 m-2" onClick={addValue}>Increase {counter}</button>
      <button className="p-1 m-2" onClick={removeValue}>Decrease {counter}</button>
      <p>footer : {counter}</p>

      <div className="container">
        {/* <Card name="prathamesh" currObj = {myObj}/> */}
      <Card name="prathamesh" btnText="Visit me"/>
      {/* <Card name="prajwal" btnText="Click me"/> */}
      <Card name="prajwal"/>
      </div>
    </>
  )
}

export default App
