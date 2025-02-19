import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Content from './components/Content'
import Card from './components/Card'
import Info_About from './components/Info_About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Content />
      <Card />
      <Info_About />
      <Footer />
    </>
  )
}

export default App
