import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './_components'

function App() {
  const [count, setCount] = useState(0)

  const addNewPhrase = () => {
    console.log("nueva frase")
  }

  return (
    <>
  <Button label={"Agregar nueva frase"} parentMethod={addNewPhrase}/>
    </>
  )
}

export default App
