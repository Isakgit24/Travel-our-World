
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Countries from './pages/Countries'

function App() {
  

  return (
    <>
    <Routes>
       <Route path="/" element={< Countries/>} />
       </Routes>
    </>
  )
}

export default App
