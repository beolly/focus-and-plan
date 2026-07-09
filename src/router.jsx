import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import Progress from './pages/Progress'
import Settings from './pages/Setting'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'courses',
      element: <Courses />,
    },
    {
      path: 'course',
      element: <Course />,
    },
    {
      path: 'lesson',
      element: <Lesson />,
    },
    {
      path: 'progress',
      element: <Progress />,
    },
    {
      path: 'settings',
      element: <Settings />,
    },
  ],
}
])
import Layout from './components/Layout'

export default router