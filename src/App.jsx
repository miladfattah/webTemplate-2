import React from 'react'
import './App.css'
import {Footer , Possibility , Features , WhatGPT3 , Header} from './containers'
import {Cta , Brand , Navbar} from './components'
function App() {

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
