import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

// ── Edit your homepage content here ─────────────────────────────
// English text lives here. Korean text lives in i18n/ko/code.json (same ids).
const PROJECTS = [
  {
    title: 'NowSeoul (지금서울)',
    period: translate({id: 'home.nowseoul.period', message: 'Jul – Aug 2026 · Team of 5'}),
    summary: translate({
      id: 'home.nowseoul.summary',
      message:
        'Real-time, crowd-aware event recommendations for Seoul. Built the data pipeline: 4 external APIs → Azure Functions → Event Hubs → Stream Analytics → PostgreSQL / Power BI.',
    }),
    role: translate({id: 'home.nowseoul.role', message: 'Data Engineer + UI/UX'}),
    tags: ['Azure Event Hubs', 'Stream Analytics', 'Functions', 'PostgreSQL', 'Power BI', 'Python'],
    link: '/docs/projects/nowseoul',
  },
];

const SKILLS = ['Python', 'SQL', 'Azure', 'Event Hubs', 'Stream Analytics', 'Azure Functions', 'PostgreSQL', 'Power BI'];
// ────────────────────────────────────────────────────────────────

function ProjectCard({title, period, summary, role, tags, link}) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.role}>{role}</p>
      <p>{summary}</p>
      <div className={styles.tags}>
        {tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <span className={styles.more}>
        <Translate id="home.viewProject">View project →</Translate>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({id: 'home.pageTitle', message: 'Portfolio'})}
      description="SJ · Data Analyst / Engineer portfolio">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.name}>SJ</h1>
          <p className={styles.headline}>
            <Translate id="home.headline">Data Analyst / Engineer</Translate>
          </p>
          <p className={styles.intro}>
            <Translate id="home.intro">
              IT graduate from Australia, now building cloud data pipelines on Azure through Microsoft AI Data School. Certified in Azure Data Fundamentals (DP-900).
            </Translate>
          </p>
          <div className={styles.skills}>
            {SKILLS.map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/projects/nowseoul">
              <Translate id="home.seeProjects">See projects</Translate>
            </Link>
            <Link className="button button--secondary button--lg" href="https://github.com/jasoncc1">
              GitHub
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <section className={styles.section}>
          <h2><Translate id="home.projects">Projects</Translate></h2>
          <div className={styles.grid}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2><Translate id="home.notes">Notes</Translate></h2>
          <div className={styles.grid}>
            <Link to="/docs/azure-study/overview" className={styles.card}>
              <h3><Translate id="home.azure.title">Azure Study</Translate></h3>
              <p><Translate id="home.azure.desc">Azure study notes in English and Korean.</Translate></p>
              <span className={styles.more}><Translate id="home.open">Open →</Translate></span>
            </Link>
            <Link to="/docs/sql-notes/overview" className={styles.card}>
              <h3><Translate id="home.sql.title">SQL Notes</Translate></h3>
              <p><Translate id="home.sql.desc">SQL concepts and practice.</Translate></p>
              <span className={styles.more}><Translate id="home.open">Open →</Translate></span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
