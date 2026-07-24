import styles from './Logo.module.css';

function Logo() {
  return (
    <a
      href="https://focus-and-plan.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logo}
      aria-label="Сайт Фокус і План"
    >
      ФП
    </a>
  );
}

export default Logo;