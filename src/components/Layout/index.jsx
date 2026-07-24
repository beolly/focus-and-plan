import { Outlet } from 'react-router-dom'

import Header from '../Header'
import BottomNavigation from '../BottomNavigation'

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      
    </>
  )
}

export default Layout