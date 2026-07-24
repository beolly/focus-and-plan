import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader/PageHeader';

import { getCourses, saveCourses } from '../../utils/storage';

function AddCourse() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');

  function handleSave() {
    const courses = getCourses();

    const newCourse = {
      id: Date.now(),
      title,
    };

    saveCourses([...courses, newCourse]);

    navigate('/courses');
  }

  return (
    <div className="page">
      <PageHeader title="Новий курс" />

      <label>Назва</label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button onClick={handleSave}>
        Ок
      </Button>
    </div>
  );
}

export default AddCourse;