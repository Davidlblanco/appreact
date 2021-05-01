//rfc
import React from 'react'
import slide1 from './img/slide1.jpeg'
import slide2 from './img/slide2.jpeg'
import slide3 from './img/slide3.jpeg'
import Slide from './Slide'

function App() {
  const slides = [
    { id: 'slide1', text: 'slide1', picture: slide1 },
    { id: 'slide2', text: 'slide2', picture: slide2 },
    { id: 'slide3', text: 'slide3', picture: slide3 },
  ]
  return (
    <React.Fragment>
      <Slide slides={slides}></Slide>
    </React.Fragment>
  )
}

export default App
