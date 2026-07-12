import styles from './Progress.module.css';

function ProgressBar({ progress }) {
  return (
    <>
      <div className={styles.progress}>
        <div
          className={styles.fill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>{progress}%</p>
    </>
  );
}

export default ProgressBar;