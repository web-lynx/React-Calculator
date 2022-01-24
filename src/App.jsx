import React, { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'
import { Button } from './Components/Button'
import { Display } from './Components/Display'

const Buttons = [
  {val: "clear", displayVal: "AC"},
  {val: "+/-"},
  {val: "%"},
  {val: "/", displayVal: "÷"},
  {val: "7"},
  {val: "8"},
  {val: "9"},
  {val: "*", displayVal: "×"},
  {val: "4"},
  {val: "5"},
  {val: "6"},
  {val: "-"},
  {val: "1"},
  {val: "2"},
  {val: "3"},
  {val: "+"},
  {val: "0"},
  {val: "."},
  {val: "equals", displayVal: "="}
]

const App = () => {
  const [total, setTotal] = useState([0])

  const calculatorClick = (val) => {
    if (val === "clear") {
      setTotal([0])
    } else if (val === "equals") {
      let sum = evaluate(total.join(""))
      setTotal([sum])
    } else {
      let tempTotal = [...total]
      if (tempTotal[0] === 0) {
        tempTotal.shift()
      }
      setTotal([...tempTotal, val])
      console.log(total)
    }
  }

  return (
    <div className="App">
      <div id='calculatorgrid'>
          <Display value={total} />
          {Buttons.map((item, index) => {
                return <Button key={index} value={item} calculatorClick={calculatorClick} />
                })}
      </div>
    </div>
  )
}

export default App

// the final if statement is used like this (tempTotalorary array) to respect state immutability
//add errorhandling for bad sums?