import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WorkSchedule from '../parts/workSchedule'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>勤務表</title>
        <meta name="description" content="勤務表" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WorkSchedule />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

