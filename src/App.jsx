import React from 'react'
import './App.css'
import Nav from './Nav';
import Landing from './Landing'
import Footer from './footer'
import Challenge from './Challenge';

 function App() {
  return (
    <div className="app">
      {/* Nav Section */}
      <Nav />
      {/* landingPage */}
      <Landing />
      {/* challenge Section */}
      <Challenge />
      {/* footer */}
      <Footer />


    </div>
  )
}

export default App;