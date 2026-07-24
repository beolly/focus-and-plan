import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'
import courses from '../../data/courses'
import lessons from '../../data/lessons'
import { NavLink } from "react-router-dom";
import Card from '../../components/Card'

const currentCourse = courses[0];
const currentLesson = lessons.find(
  lesson => lesson.status === 'current'
);

function Home() {
    const navigate = useNavigate()
  return(
    <div className="page">
      <nav className="nav">
    <NavLink to="/">Головна</NavLink>

    <NavLink to="/courses">Курси</NavLink>

    <NavLink to="/settings">⚙</NavLink>
</nav>

      {courses.map((course) => <Card key={course.id}>

        <h2 className='course-name'>{currentCourse.title}</h2>
        <h3>Сьогодні</h3>
       <p>Урок №{currentLesson.number}</p>
        <h3>{currentLesson.title}</h3>
    </Card>)}
<ProgressBar progress={currentLesson.progress} />
<Button onClick={() => navigate('/lesson')}>
  Почати урок
</Button>
    <section className="nextLesson">
        <button
        className="nextButton"
        onClick={() => navigate('/lesson')}
    >
        Наступний урок →
    </button>
      </section>
      <Logo />
</div>
)
}

export default Home