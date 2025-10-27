import { Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu/Menu'
import { Footer } from '../components/Footer/Footer'

export default function RootLayout() {
  return (
    <div>

      <Menu />
      
        <div className="lg:w-[65%] mx-auto">
          <Outlet />
        </div>

  
      <Footer />
    </div>
  )
}