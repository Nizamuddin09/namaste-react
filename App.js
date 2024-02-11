import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading = () => {
  return (
    <div id='container'>
      {Title()}
      <Title />
      <h1>Namaste</h1>
    </div>
  )
}

const Title = () => <h1>Hello</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading />)
