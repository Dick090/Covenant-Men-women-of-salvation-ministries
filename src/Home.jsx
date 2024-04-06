import React from 'react'
import Loading from './Loading';
import Frist_bar from '../Components/First_bar/Frist_bar';
import Secound from '../Components/secound_bar/Secound';
import Third_bar from '../Components/third_bar/third_bar';
import Final from '../Components/final/final';
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
