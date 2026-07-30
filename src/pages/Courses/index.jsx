import { useNavigate } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button';
import { getCourses } from '../../utils/storage';

function Courses() {
  const navigate = useNavigate();
  const courses = getCourses();

  if (courses.length === 0) {
    return (
      <div className="page">
        <PageHeader title="Мої курси" />

        <div className="emptyState">
          <h2>Курсів ще немає</h2>

          <p>Створіть перший курс, щоб почати навчання.</p>

          <Button onClick={() => navigate('/add-course')}>
            Створити курс
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHeader title="Мої курси" />

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
    </div>
  );
}

export default Courses