import './assets/sass/App.scss'
import Register from './Pages/Register/Register'
import Home from './Pages/Home'
import VerifyAccount from './Pages/VerifyAccount/VerifyAccount'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="verify" element={<VerifyAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
