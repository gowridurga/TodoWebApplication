import {BrowserRouter as Route, Routes} from 'react-router-dom'

import Home from './components/Home'

import SignUp from './components/SingUp'
import Login from './components/Login'

import './App.css'

function App() {
  const user = localStorage.getItem('token')
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}
export default App
