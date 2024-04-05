import React from 'react'
import Frist_bar from '../Components/First_bar/Frist_bar'
import Secound from '../Components/secound_bar/Secound'
import Final from '../Components/final/final'
import Third_bar from '../Components/third_bar/third_bar'
import Loading from './Loading'

const on = true;
function Home() {
  return (
    <div>
      <Loading on={on} />
      <Frist_bar />
      <Secound />
      <Third_bar />
      <Final />
    </div>
  )
}

export default Home
