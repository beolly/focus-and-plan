import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader/PageHeader';

import {
  getCourses,
  saveCourses,
} from '../../utils/storage';

function AddLesson() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSave() {
    const courses = getCourses();

    const updatedCourses = courses.map(course => {
      if (course.id === Number(id)) {
        return {
          ...course,

          lessons: [
            ...(course.lessons || []),

            {
              id: Date.now(),
              title,
              content,
              notes: '',
            },
          ],
        };
      }

      return course;
    });

    saveCourses(updatedCourses);

    navigate(`/courses/${id}`);
  }

  return (
    <div className="page">
      <PageHeader title="Новий урок" />

      <label>Тема уроку</label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Матеріал уроку</label>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Додайте матеріал уроку..."
      />

      <Button onClick={handleSave}>
        Зберегти
      </Button>
    </div>
  );
}

export default AddLesson