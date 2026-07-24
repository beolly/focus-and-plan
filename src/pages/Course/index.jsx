import {useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { getCourses } from '../../utils/storage';
import  Button from '../../components/Button';

function Course() {
  const { id } = useParams();
const navigate = useNavigate();
  const courses = getCourses();

  const course = courses.find(
    course => course.id === Number(id)
  );
  const lessons = course.lessons || [];
  return (
    <div className="page">
      <PageHeader title={course.title} />
  {lessons.length === 0 ? (
        <div className="emptyState">
          <h2>У цьому курсі ще немає уроків</h2>
        </div>
      ) : (
        <div className="lessonsList">
          {lessons.map(lesson => (
            <div
              key={lesson.id}
              className="lessonItem"
              onClick={() =>
    navigate(`/courses/${id}/lessons/${lesson.id}`)
  }
            >
              <h2>{lesson.title}</h2>

           
            </div>
          ))}
        </div>
      )}

      <Button
        onClick={() => navigate(`/courses/${id}/add-lesson`)}
      >
        Додати урок
      </Button>
    </div>
  );
}

export default Course;