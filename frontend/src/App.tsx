
import './App.css'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import ScheduleForm from './components/ScheduleForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/schedule' element={<ScheduleForm/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
