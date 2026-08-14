import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
     <Link
      to="/about"
      className={styles.logo}
      aria-label="Про застосунок Focus & Plan"
    >
      ФП
    </Link>
  );
}

export default Logo;