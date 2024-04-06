import React, { useState } from 'react'
import Loading from './Loading'
import Form from './Components/Form/Form'

function Give() {

  const [appleFromr, setappleFromr] = useState(false)
  const [Givefromr, setGivefromr] = useState(true) 
  const on = false

  return (
    <div>
            <Loading on={on} />
      <Form appleFrom={appleFromr} GiveFrom={Givefromr}/>
     

    </div>
  )
}

export default Give
