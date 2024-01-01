import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/header'
import Form from './components/form'
import Display from './components/display'
function App(){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return(
    <>
    <Heading />
    <Form setFirstName={setFirstName} firstName={firstName} setLastName={setLastName} lastName={lastName}
    setEmail={setEmail} email={email} setNumber={setNumber} number={number}/>
    <Display firstName={firstName} lastName={lastName} email={email} number={number}/>
    </>
  )
}

export default App
