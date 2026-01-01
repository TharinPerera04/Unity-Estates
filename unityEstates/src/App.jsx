import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Search from './search'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
