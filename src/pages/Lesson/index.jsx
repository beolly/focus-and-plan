import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

  const lessons = course.lessons || [];

  const currentLessonIndex = lessons.findIndex(
    lesson => lesson.id === Number(lessonId)
  );

  const lesson = lessons[currentLessonIndex];

  const nextLesson = lessons[currentLessonIndex + 1];

  const [notes, setNotes] = useState(
    lesson.notes || ''
  );

  function handleSaveNotes() {
    const updatedCourses = courses.map(course => {
      if (course.id === Number(id)) {
        return {
          ...course,

          lessons: course.lessons.map(lesson => {
            if (lesson.id === Number(lessonId)) {
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
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Додайте свої нотатки..."
        />

        <Button onClick={handleSaveNotes}>
          Зберегти нотатки
        </Button>
      </section>

      {nextLesson && (
        <Button
          onClick={() =>
            navigate(
              `/courses/${id}/lessons/${nextLesson.id}`
            )
          }
        >
          Наступний урок
        </Button>
      )}

    </div>
  );
}

export default Lesson;