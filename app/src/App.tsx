// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from './_components'
// import type { InputProps } from './_components/inputs/types'
import { CustomForm } from './_components/forms/customForm'

function App() {
  // const [count, setCount] = useState(0)

  const handleSubmit = (data: any) => {
    console.log("nueva frase",data);
  }

  const filters: any = [
    {
      label: "frase",
      name: "prhase",
      placeholder: "Escribi una frase",
      type: "text"
    },
    {
      label: "autor",
      name: "author",
      placeholder: "Escribi el author",
      type: "text"
    }
  ]

  return (
    <>
      <CustomForm filters={filters} onSubmit={handleSubmit}></CustomForm>
    </>
  )
}

export default App;
