import initialCourses from '../data/courses';

const STORAGE_KEY = 'focus-and-plan-courses';

export function getCourses() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(initialCourses)
    );

    return initialCourses;
  }

  return JSON.parse(data);
}

export function saveCourses(courses) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(courses)
  );
}