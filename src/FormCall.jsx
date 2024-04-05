import React, { useState } from 'react'
import Form from '../Components/Form/Form'
import Loading from './Loading';

function FormCall() {
  const [appleFromr, setappleFromr] = useState(true)
  const [Givefromr, setGivefromr] = useState(false) 
  const on = false

  return (
    <div>

      <Loading on={on} />
      <Form appleFrom={appleFromr} GiveFrom={Givefromr}/>
     
     
    </div>
  )
}

export default FormCall
