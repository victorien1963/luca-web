import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar, Footer } from './components'
import { Home, Info, OpenAccount, Accounts, Billing } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="min-vh-100">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OpenAccount" element={<OpenAccount />} />
            <Route path="/Accounts" element={<Accounts />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
