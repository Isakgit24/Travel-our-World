
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { CountryDetail } from './pages/CountryDetail'
import Home from './pages/Home'


function App() {
 

  return (
    <>
    <Routes>
       <Route path="/" element={< Home/>} />
           <Route path={'/home/:id'} element={< CountryDetail/>} />
       </Routes>
    </>
  )
}

export default App
