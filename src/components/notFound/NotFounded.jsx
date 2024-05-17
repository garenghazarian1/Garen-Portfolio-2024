import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFounded() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.subHeader}>Oops! Page not found.</p>
        <p className={styles.description}>The page you are looking for does not exist or has been moved.</p>

        <Link href="/" className={styles.linkButton}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
