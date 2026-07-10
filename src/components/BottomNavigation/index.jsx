import { NavLink } from 'react-router-dom'

function BottomNavigation() {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/courses">Курси</NavLink>
      <NavLink to="/settings">Налаштування</NavLink>
    </nav>
  )
}

export default BottomNavigation