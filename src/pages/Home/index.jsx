import { useNavigate, NavLink } from 'react-router-dom';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Card from '../../components/Card';
import './Home.css';
import { getCourses } from '../../utils/storage';

function Home() {
  const navigate = useNavigate();

  const courses = getCourses();

  const currentCourse =
    courses.find(course => course.active) || courses[0];

  // Якщо курсів немає
  if (!currentCourse) {
    return (
      <div className="page">

        <nav className="nav">
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/courses">Курси</NavLink>
          <NavLink to="/settings">⚙</NavLink>
        </nav>

        <h2>У вас ще немає курсів</h2>

        <Button
          onClick={() => navigate('/add-course')}
        >
          Додати курс
        </Button>

        <Logo />

      </div>
    );
  }

  const currentLessons =
    currentCourse.lessons || [];

  // Перший незавершений урок
  const currentLesson =
    currentLessons.find(
      lesson => !lesson.completed
    );
    const currentLessonIndex =
  currentLesson
    ? currentLessons.indexOf(currentLesson)
    : -1;

const nextLesson =
  currentLessonIndex >= 0
    ? currentLessons[currentLessonIndex + 1]
    : null;

  // Скільки уроків завершено
  const completedLessons =
    currentLessons.filter(
      lesson => lesson.completed
    ).length;

  // Прогрес тільки активного курсу
  const progress =
    currentLessons.length
      ? Math.round(
          (completedLessons /
            currentLessons.length) *
            100
        )
      : 0;

  return (
    <div className="page">

      <nav className="nav">
        <NavLink to="/">
          Головна
        </NavLink>

        <NavLink to="/courses">
          Курси
        </NavLink>

        <NavLink to="/settings">
          ⚙
        </NavLink>
      </nav>

      <Card>

        <h2 className="course-name">
          {currentCourse.title}
        </h2>

        <ProgressBar
          progress={progress}
        />

     {currentLesson ? (
  <>
    <h3>Сьогодні</h3>

    <p>
      Урок №
      {currentLessons.indexOf(currentLesson) + 1}
    </p>

    <h3>{currentLesson.title}</h3>
{/* homebtnsdiv */}
   
   <div className="homeButtons"> <Button
      onClick={() =>
        navigate(
          `/courses/${currentCourse.id}/lessons/${currentLesson.id}`
        )
      }
    >
      Почати урок
    </Button></div>
  </>
) : (
  <>
    <h2> Курс завершено</h2>

    <p>
      Ви пройшли всі уроки цього курсу.
    </p>
  </>
)}

      </Card>

    {nextLesson && (
  <section className="nextLesson">

    <Button
      className="nextButton"
      onClick={() =>
        navigate(
          `/courses/${currentCourse.id}/lessons/${nextLesson.id}`
        )
      }
    >
      Наступний урок →
    </Button>

  </section>
)}
      <Logo />

    </div>
  );
}

export default Home