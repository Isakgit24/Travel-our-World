
import { Route, Routes } from 'react-router-dom'
import './style/App.css'

import { CountryDetail } from './pages/CountryDetail'
import Home from './pages/Home'
import Nav from './components/Nav'
import NotFound from './pages/NotFound'



function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path={'/countries/:identifier'} element={< CountryDetail />} />
        <Route path="*" element={< NotFound />} />
        </Routes>
        
      </main>
    </>
  )
}

export default App
