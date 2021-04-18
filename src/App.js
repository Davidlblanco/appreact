//rfc
import React from 'react'
import Container from './Container'
import { Storage } from './Context'

function App() {
  return (
    <Storage>
      <Container />
    </Storage>
  )
}

export default App
