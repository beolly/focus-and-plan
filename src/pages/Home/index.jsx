import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Card from '../../components/Card'
import ProgressBar from '../../components/ProgressBar'
import courses from '../../data/courses'
import lessons from '../../data/lessons'
const currentCourse = courses[0]
const currentLesson = lessons.find(
  lesson => lesson.status === 'current'
)

function Home() {
    const navigate = useNavigate()
  return(
    <>
    <Button onClick={() => navigate('/add-course')}>
            Додати курс
        </Button>
    
      {courses.map((course) => <Card key={course.id}>
        

        <h2>{currentCourse.title}</h2>
        <h3>Сьогодні</h3>
       <p>Урок №{currentLesson.number}</p>

        <h3>{currentLesson.title}</h3>
    </Card>)}
<ProgressBar progress={currentLesson.progress} />
<Button onClick={() => navigate('/lesson')}>
  Почати урок
</Button>
</>
)
}

export default Home