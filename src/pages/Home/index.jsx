import Button from '../../components/Button'
import Card from '../../components/Card'
import lesson from '../../data/mockData'
import ProgressBar from '../../components/ProgressBar'

function Home() {
  return(
    <>
    <Card>
        <h3>Сьогодні</h3>
       <p>Урок №{lesson.number}</p>

<h3>{lesson.title}</h3>
      </Card>
<ProgressBar progress={lesson.progress} />
<Button
  onClick={() => alert('Почати урок')}
>
  Почати урок
</Button>
</>
)
}

export default Home