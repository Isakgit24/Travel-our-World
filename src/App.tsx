
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { CountryDetail } from './pages/CountryDetail'
import Home from './pages/Home'
import Nav from './components/Nav'



function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path={'/countries/:id'} element={< CountryDetail />} />
        </Routes>
        
      </main>
    </>
  )
}

export default App
