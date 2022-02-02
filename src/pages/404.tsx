import { Link } from '@components/common'
import { PageLayout } from '@src/components/layout'
import styles from '@styles/pages/404.module.scss'

export default function FourZeroFour() {
  return (
    <PageLayout disableTransition fixedHeight>
      <div className={styles.cnt}>
        <div className={styles.forbid}>
          <h1 className={styles.text}>404</h1>
        </div>
        <div className={styles.recommend}>
          <p className={styles.text_sorry}>Sorry we couldn&apos;t find this page.</p>
          <p className={styles.text_worry}>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <button className={styles.back}>Back to homepage</button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
