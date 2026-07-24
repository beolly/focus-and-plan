import { useNavigate, useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button';
import { getCourses } from '../../utils/storage';

function Courses() {
  const navigate = useNavigate();
  const courses = getCourses();

  return (
    <div className="page">
      <PageHeader title="Мої курси" />

      {courses.length === 0 ? (
        <div className="emptyState">
          <h2>У вас ще немає курсів</h2>

          <Button onClick={() => navigate('/add-course')}>
            Додати курс
          </Button>
        </div>
      ) : (
        <>
          {courses.map(course => (
            <div
              key={course.id}
              className="courseItem"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <h2>{course.title}</h2>
            </div>
          ))}

          <Button onClick={() => navigate('/add-course')}>
            Додати курс
          </Button>
        </>
      )}
    </div>
  );
}
// проойдено курс
export default Courses;