import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>Фокус і План</header>

      <main>
        <Outlet />
      </main>

      <footer>Навігація</footer>
    </>
  )
}

export default Layout