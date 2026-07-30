import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Lesson.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button';

import {
  getCourses,
  saveCourses,
} from '../../utils/storage';

function Lesson() {
  const navigate = useNavigate();

  const { id, lessonId } = useParams();

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

  const lessonIndex = lessons.findIndex(
    lesson => lesson.id === Number(lessonId)
  );

  const lesson = lessons[lessonIndex];

  if (!lesson) {
    return (
      <div className="page">
        <h2>Урок не знайдено</h2>
      </div>
    );
  }

  const nextLesson = lessons[lessonIndex + 1];

  const [notes, setNotes] = useState(
    lesson.notes || ''
  );

  function handleSaveNotes() {
    const updatedCourses = courses.map(course => {
      if (course.id === Number(id)) {
        return {
          ...course,

          lessons: course.lessons.map(lesson => {
            if (
              lesson.id === Number(lessonId)
            ) {
              return {
                ...lesson,
                notes,
              };
            }

            return lesson;
          }),
        };
      }

      return course;
    });

    saveCourses(updatedCourses);
  }

function handleCompleteLesson() {
  const updatedCourses = courses.map(course => {
    if (course.id !== Number(id)) {
      return course;
    }

    return {
      ...course,
      active: true,
      lessons: course.lessons.map(item => {
        if (item.id === Number(lessonId)) {
          return {
            ...item,
            completed: true,
            notes,
          };
        }

        return item;
      }),
    };
  });

  saveCourses(updatedCourses);

  if (nextLesson) {
    navigate(`/courses/${id}/lessons/${nextLesson.id}`);
  } else {
    navigate(`/`);
  }
}
  return (
    <div className="page">

      <PageHeader title={lesson.title} />

      <section className="lessonTopic">
        <h2>Тема</h2>

        <p>
          {lesson.content}
        </p>
      </section>

      <section className="lessonNotes">
        <h2>Нотатки</h2>

        <textarea
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
          placeholder="Додайте свої нотатки..."
        />
<div className="lessonButtons">

  <Button  className="small" onClick={handleSaveNotes}>
    Зберегти 
  </Button>

  <Button  className="small" onClick={handleCompleteLesson}>
    Вивчив
  </Button>

</div>
      </section>
      {nextLesson && (
        <Button
          onClick={() =>
            navigate(
              `/courses/${id}/lessons/${nextLesson.id}`
            )
          }
        >
          Наступний урок →
        </Button>
      )}

    </div>
  );
}

export default Lesson