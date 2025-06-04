import '../styles/example-react-component.css';
import React, { useState } from "react"

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="example-react-component" onClick={() => setClickCount(prev => prev + 1)}>
      <h1 className='example-react-component__heading'>Hello from React!</h1>
      <p className='example-react-component__text'>You have clicked on this component {clickCount} times!!!!</p>
    </div>
  )
}

export default ExampleReactComponent
