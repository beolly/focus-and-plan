import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import styles from './PageHeader.module.css';

function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.homeButton}
        onClick={() => navigate('/')}
      >
        <HiArrowLeft size={20} />
        <span>На головну</span>
      </button>

      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  );
}

export default PageHeader