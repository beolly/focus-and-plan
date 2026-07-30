import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import AddLesson from './pages/AddLesson'
import Progress from './pages/Progress'
import Settings from './pages/Setting'
import AddCourse from './pages/AddCourse'

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
      path: 'courses/:id',
      element: <Course />,
    },

    {
  path: 'courses/:id/add-lesson',
  element: <AddLesson />,
},
    {
      path: 'progress',
      element: <Progress />,
    },
    {
      path: 'settings',
      element: <Settings />,
    },
    {
  path: 'add-course',
  element: <AddCourse />,
},
{
  path: 'courses/:id/lessons/:lessonId',
  element: <Lesson />,
},
  ],
}
])

export default router