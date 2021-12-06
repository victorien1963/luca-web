import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar, Footer, LoginForm, ScrollToTop } from './components'
import { Home, Info, OpenAccount, Accounts, Billing } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [auth, setauth] = useState({ status: 'unauthed' })
  const [show, setshow] = useState(false)
  const handleLoginShow = () => setshow(true)
  const handleLoginClose = (value) => {
    setshow(false)
    if (value) {
      // should have a wrapper or local storage
      setauth(value)
      // cookies
      document.cookie = 'status=authed'
      document.cookie = 'name=RD'
    }
  }
  const handleLogOut = () => {
    setauth({ status: 'unauthed' })
    document.cookie = 'status=unauthed'
    document.cookie = 'name='
    window.location.replace('/')
  }

  return (
    <div className="App">
      <div className="min-vh-100">
        <Router>
          <NavBar setting={{ auth, handleLoginShow, handleLogOut }} />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/OpenAccount" element={<OpenAccount />} />
              <Route path="/Accounts" element={<Accounts />} />
              <Route path="/Billing" element={<Billing />} />
              <Route path="/Info" element={<Info />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
      <LoginForm show={show} handleClose={handleLoginClose} />
      <Footer />
    </div>
  )
}

export default App
