const STORAGE_KEY = 'focus-and-plan-courses';

export function getCourses() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveCourses(courses) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(courses)
  );
}