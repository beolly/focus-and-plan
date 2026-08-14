import { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button';

import './About.css';

function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    setSent(true);

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="aboutPage">

      <PageHeader title="Про застосунок" />

      {/* Підбадьорююча ілюстрація */}

      <section className="aboutHero">

        <div className="aboutIllustration">

          <svg
            viewBox="0 0 500 360"
            className="aboutSvg"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* Сонце */}

            <circle
              cx="395"
              cy="70"
              r="35"
              fill="#E8B95A"
            />

            <path
              d="M395 20V5
                 M395 135V120
                 M345 70H330
                 M460 70H445
                 M360 35L350 25
                 M430 105L440 115
                 M430 35L440 25
                 M360 105L350 115"
              stroke="#E8B95A"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Стіл */}

            <rect
              x="85"
              y="265"
              width="330"
              height="14"
              rx="7"
              fill="#376F60"
            />

            {/* Людина */}

            <circle
              cx="245"
              cy="135"
              r="42"
              fill="#F1C7A8"
            />

            {/* Волосся */}

            <path
              d="M205 125
                 C205 82 285 75 288 130
                 C275 108 230 105 205 125Z"
              fill="#4A403A"
            />

            {/* Тіло */}

            <path
              d="M185 250
                 C190 190 215 170 245 170
                 C275 170 300 190 305 250Z"
              fill="#376F60"
            />

            {/* Рука */}

            <path
              d="M285 205
                 C320 215 330 235 350 250"
              fill="none"
              stroke="#F1C7A8"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Ноутбук */}

            <rect
              x="145"
              y="215"
              width="150"
              height="85"
              rx="8"
              fill="#4B5552"
            />

            <rect
              x="155"
              y="225"
              width="130"
              height="65"
              rx="4"
              fill="#F7F6F3"
            />

            {/* Галочки на екрані */}

            <path
              d="M175 245L183 253L197 238"
              fill="none"
              stroke="#376F60"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <line
              x1="210"
              y1="247"
              x2="265"
              y2="247"
              stroke="#D5D2CC"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <path
              d="M175 270L183 278L197 263"
              fill="none"
              stroke="#376F60"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <line
              x1="210"
              y1="272"
              x2="265"
              y2="272"
              stroke="#D5D2CC"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Книжка */}

            <path
              d="M330 235
                 L380 225
                 L380 270
                 L330 280Z"
              fill="#E8B95A"
            />

            <path
              d="M330 235
                 L305 225
                 L305 270
                 L330 280Z"
              fill="#D8A94E"
            />

            {/* Зірочки */}

            <text
              x="80"
              y="95"
              fontSize="30"
              fill="#376F60"
            >
              ✦
            </text>

            <text
              x="430"
              y="190"
              fontSize="24"
              fill="#376F60"
            >
              ✦
            </text>

            <text
              x="120"
              y="190"
              fontSize="20"
              fill="#E8B95A"
            >
              ✦
            </text>

          </svg>

        </div>


        <div className="aboutHeroText">

          <h2>
            Маленькі кроки —
            <br />
            великий прогрес.
          </h2>

          <p>
            Не обов'язково зробити все одразу.
            Focus & Plan допомагає рухатися
            вперед крок за кроком.
          </p>

        </div>

      </section>


      {/* Про застосунок */}

      <section className="aboutSection">

        <h2>Що таке Focus & Plan?</h2>

        <p>
          Focus & Plan — це простий застосунок
          для організації навчання.
        </p>

        <p>
          Тут можна створювати курси, проходити
          уроки, залишати власні нотатки та
          бачити свій прогрес.
        </p>

        <p>
          Головна ідея — зробити навчання
          зрозумілим і не перевантажувати
          зайвими функціями.
        </p>

      </section>


      {/* Розробник */}

      <section className="aboutSection">

        <h2>Про розробника</h2>

        <div className="developerCard">

          <div className="developerAvatar">
            О
          </div>

          <div>

            <h3>
              Ольга Бєлєнко
            </h3>

            <p>
              Frontend Developer
            </p>

            <div className="technologies">

              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
              <span>React Router</span>

            </div>

          </div>

        </div>

      </section>


      {/* Пропозиції */}

      <section className="aboutSection suggestion">

        <h2>
          Є ідея?
        </h2>

        <p>
          Якщо маєш пропозицію щодо застосунку —
          напиши її. Що додвти/ прибрати?
        </p>


        <form onSubmit={handleSubmit}>

          <label>
            Ім'я

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Ваше ім'я"
            />
          </label>


          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="your@email.com"
            />
          </label>


          <label>
            Пропозиція

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Що можна покращити?"
              rows="5"
            />
          </label>


          <Button type="submit">
            Надіслати
          </Button>

          {sent && (
            <p className="successMessage">
              Дякую за те, що Ви  є❤️
            </p>
          )}

        </form>

      </section>

    </div>
  );
}

export default About;