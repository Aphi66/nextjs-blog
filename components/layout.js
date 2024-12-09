import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = '[Aphichit Sonchan]';
export const siteTitle = 'Next.js Sample Website';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume - {name}</title>
      </Head>
      <section className={styles.resume}>
        <header className={styles.header}>
          <Image
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <h2 className={styles.position}>{position}</h2>
          <p className={styles.summary}>{summary}</p>
        </header>

        <main className={styles.main}>
          <section>
            <h3 className={utilStyles.headingMd}>Experience</h3>
            <ul className={styles.list}>
              <li>
                <strong>Senior Developer</strong> - HealthTech Innovations (2020–Present)
                <p>
                  Led the development of a Personal Health Management Platform using modern frameworks like React and Node.js.
                </p>
              </li>
              <li>
                <strong>Software Engineer</strong> - XYZ Solutions (2017–2020)
                <p>
                  Contributed to the design and implementation of scalable e-commerce systems, improving performance by 30%.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className={utilStyles.headingMd}>Education</h3>
            <ul className={styles.list}>
              <li>
                <strong>Bachelor of Computer Science</strong> - ABC University (2013–2017)
                <p>Graduated with Honors, focusing on software development and data analytics.</p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className={utilStyles.headingMd}>Skills</h3>
            <ul className={styles.skills}>
              <li>JavaScript (React, Next.js, Node.js)</li>
              <li>Python (Django, Flask)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Cloud Platforms (AWS, GCP)</li>
            </ul>
          </section>
        </main>
      </section>
    </Layout>
  );
}
