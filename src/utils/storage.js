const STORAGE_KEY = 'focus-and-plan-courses';

const defaultCourses = [
  {
    id: 1,
    title: 'English B1',
    active: true,

    lessons: [
      {
        id: 1,
        title: 'Present Simple',
        completed: false,
        content: `Що вивчити:

• коли використовуємо Present Simple
• стверджувальні речення
• do / does
• заперечення
• питання

Приклади:

I work every day.
She likes coffee.
Do you play tennis?

Джерела:

• BBC Learning English
• English Grammar in Use`,
        notes: ''
      },

      {
        id: 2,
        title: 'Present Continuous',
        completed: false,
        content: `Що вивчити:

• коли використовуємо Present Continuous
• am / is / are
• утворення заперечень і питань

Приклади:

I am working now.
She is reading a book.
Are they watching TV?

Джерела:

• BBC Learning English
• Cambridge Dictionary`,
        notes: ''
      },

      {
        id: 3,
        title: 'Past Simple',
        completed: false,
        content: `Що вивчити:

• правильні та неправильні дієслова
• did / did not
• питання та заперечення

Приклади:

I visited London.
She went home.
Did you see him?`,
        notes: ''
      },

      {
        id: 4,
        title: 'Past Continuous',
        completed: false,
        content: `Що вивчити:

• was / were
• дії, які тривали в певний момент у минулому

Приклади:

I was working at 5 pm.
They were watching TV.`,
        notes: ''
      },

      {
        id: 5,
        title: 'Present Perfect',
        completed: false,
        content: `Що вивчити:

• have / has
• третя форма дієслова
• already, just, yet, ever, never

Приклади:

I have finished my work.
She has never been to Spain.`,
        notes: ''
      },

      {
        id: 6,
        title: 'Present Perfect Continuous',
        completed: false,
        content: `Що вивчити:

• have / has been
• дія, яка почалася в минулому і триває зараз

Приклад:

I have been learning English for two years.`,
        notes: ''
      },

      {
        id: 7,
        title: 'Past Perfect',
        completed: false,
        content: `Що вивчити:

• had + третя форма дієслова
• дія, яка відбулася раніше за іншу минулу дію

Приклад:

I had finished the work before he arrived.`,
        notes: ''
      },

      {
        id: 8,
        title: 'Future Forms',
        completed: false,
        content: `Що вивчити:

• will
• be going to
• Present Continuous для майбутнього

Приклади:

I will call you.
I am going to study tonight.`,
        notes: ''
      },

      {
        id: 9,
        title: 'Passive Voice',
        completed: false,
        content: `Що вивчити:

• be + третя форма дієслова
• коли важлива дія, а не виконавець

Приклад:

The book was written in 2020.`,
        notes: ''
      },

      {
        id: 10,
        title: 'Conditionals',
        completed: false,
        content: `Що вивчити:

• Zero Conditional
• First Conditional
• Second Conditional

Приклад:

If it rains, I will stay home.`,
        notes: ''
      },

      {
        id: 11,
        title: 'Reported Speech',
        completed: false,
        content: `Що вивчити:

• як передавати чужі слова
• зміна часу та займенників

Приклад:

She said that she was tired.`,
        notes: ''
      },

      {
        id: 12,
        title: 'Modal Verbs',
        completed: false,
        content: `Що вивчити:

• can
• could
• should
• must
• have to
• might

Приклади:

You should study.
You must be careful.`,
        notes: ''
      },

      {
        id: 13,
        title: 'Gerunds and Infinitives',
        completed: false,
        content: `Що вивчити:

• verb + -ing
• verb + to + infinitive

Приклади:

I enjoy reading.
I want to learn English.`,
        notes: ''
      },

      {
        id: 14,
        title: 'Phrasal Verbs',
        completed: false,
        content: `Що вивчити:

• основні фразові дієслова рівня B1

Приклади:

wake up
find out
look for
give up`,
        notes: ''
      },

      {
        id: 15,
        title: 'Prepositions',
        completed: false,
        content: `Що вивчити:

• прийменники часу
• місця
• руху

Приклади:

at 5 o'clock
on Monday
in London`,
        notes: ''
      },

      {
        id: 16,
        title: 'Articles',
        completed: false,
        content: `Що вивчити:

• a / an
• the
• випадки без артикля

Приклади:

I have a car.
The car is new.`,
        notes: ''
      },

      {
        id: 17,
        title: 'Relative Clauses',
        completed: false,
        content: `Що вивчити:

• who
• which
• that
• where

Приклад:

The woman who lives here is my teacher.`,
        notes: ''
      },

      {
        id: 18,
        title: 'Vocabulary: Work',
        completed: false,
        content: `Що вивчити:

• workplace
• colleagues
• meetings
• tasks
• responsibilities

Склади 5 власних речень про роботу.`,
        notes: ''
      },

      {
        id: 19,
        title: 'Vocabulary: Travel',
        completed: false,
        content: `Що вивчити:

• transport
• accommodation
• booking
• directions
• travelling

Склади короткий діалог туриста.`,
        notes: ''
      },

      {
        id: 20,
        title: 'Speaking Practice',
        completed: false,
        content: `Повтори основні теми курсу.

Підготуй коротку розповідь англійською:

• про себе
• свою роботу
• свої плани
• подорож
• навчання

Спробуй говорити 2–3 хвилини без перекладача.`,
        notes: ''
      }
    ]
  }
];

export function getCourses() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultCourses)
    );

    return defaultCourses;
  }

  return JSON.parse(data);
}

export function saveCourses(courses) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(courses)
  );
}