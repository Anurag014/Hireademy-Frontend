import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen" >
        <Navbar className="sticky top-0 z-20"/>
        <div className="bg-[#1F2833]">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
