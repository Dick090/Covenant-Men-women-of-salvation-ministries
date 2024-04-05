import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Church from './Church'
import FormCall from './FormCall'
import Give from './Give'

function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>} >
<Route path='Home' element={<Home/>} />
<Route path='/' element={<Home/>} />
<Route path='TheChurch' element={<Church/>}/>
<Route path='Form' element={<FormCall/>} />
<Route path='Give' element={<Give/>}/>
     </Route>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
