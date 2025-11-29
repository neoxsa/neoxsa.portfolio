import NavBar from './components/Header/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'
import { Outlet } from 'react-router-dom'
import SideBar from './components/Header/SideBar.jsx'

function App() {
  return (
    <>
      <div className="min-h-screen bg-black relative">
        <div className="absolute inset-0 opacity-5 matrix-bg"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black opacity-30"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-30"></div>
        <div className="relative z-10">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App