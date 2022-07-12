import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)
  return (   
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
   )
}

export default App
