import { useState } from 'react'

import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

import './App.css';


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
