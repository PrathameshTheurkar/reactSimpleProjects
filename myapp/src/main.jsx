import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const evaluatedExpression = ' ,Prathamesh'

// const anotherElement  = React.createElement(
//   'a',
//   {href:'https://google.com' , target : '_blank'},
//   'click on me ',
//   evaluatedExpression
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* anotherElement */}
  </React.StrictMode>
)
 

