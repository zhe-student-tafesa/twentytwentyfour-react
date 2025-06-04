import './styles/global.css';
import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom/client"

const person1 = new Person("Brad")
console.log("Hello, my name is " + person1.name)

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#render-react-example-here")
  console.log("Checking mount point:", rootElement)

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<ExampleReactComponent />)
  }
})
