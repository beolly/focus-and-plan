import { useNavigate, useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

import {
  getCourses,
  saveCourses,
} from '../../utils/storage';

function Course() {
  const navigate = useNavigate();
  const { id } = useParams();

  const courses = getCourses();

  const course = courses.find(
    course => course.id === Number(id)
  );

  if (!course) {
    return (
      <div className="page">
        <h2>Курс не знайдено</h2>
      </div>
    );
  }

  const lessons = course.lessons || [];

  const completedLessons = lessons.filter(
    lesson => lesson.completed
  ).length;

  const progress = lessons.length
    ? Math.round(
        (completedLessons / lessons.length) * 100
      )
    : 0;

  function handleOpenLesson(lessonId) {
    const updatedCourses = courses.map(course => ({
      ...course,
      active: course.id === Number(id),
    }));

    saveCourses(updatedCourses);

    navigate(
      `/courses/${id}/lessons/${lessonId}`
    );
  }

  return (
    <div className="page">

      <PageHeader title={course.title} />

      <ProgressBar progress={progress} />

      {lessons.length === 0 ? (
        <>
          <h2>У цьому курсі ще немає уроків</h2>

          <Button
            onClick={() =>
              navigate(`/courses/${id}/add-lesson`)
            }
          >
            Додати урок
          </Button>
        </>
      ) : (
        <>
        {lessons.map((lesson, index) => (
  <div
    key={lesson.id}
    className="lessonItem"
    onClick={() => handleOpenLesson(lesson.id)}
  >
    <div className="lessonInfo">
      <p>Урок {index + 1}</p>

      <h3>{lesson.title}</h3>
    </div>

    <div className="lessonStatus">
      {lesson.completed ? "✓" : ">"}
    </div>
  </div>
))}

          <Button
            onClick={() =>
              navigate(`/courses/${id}/add-lesson`)
            }
          >
            Додати урок
          </Button>
        </>
      )}

    </div>
  );
}

export default Course