import { useTranslation } from 'react-i18next'
import { profile } from '../config'

const skillGroups = [
  {
    key: 'product',
    skills: [
      'requirements',
      'coordination',
      'ux',
      'testing',
      'collaboration',
    ],
  },
  {
    key: 'programming',
    skills: [
      'C#',
      'Java',
      'Kotlin',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
    ],
  },
  {
    key: 'frameworks',
    skills: [
      'ASP.NET Core',
      '.NET',
      'React',
      'Android',
      'WPF',
    ],
  },
  {
    key: 'tools',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Git',
      'Figma',
      'Visual Studio',
      'VS Code',
      'Android Studio',
    ],
  },
]

const personalFacts = [
  { number: '01', key: 'finland' },
  { number: '02', key: 'travel' },
  { number: '03', key: 'lists' },
  { number: '04', key: 'yahtzee' },
  { number: '05', key: 'coffee' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="container page-content about-page">
      <div className="page-intro">

        <h1>
          {t('about.title')} <em>{t('about.titleAccent')}</em>
        </h1>
      </div>

      <section className="about-introduction">
        <div className="about-small-avatar" aria-hidden="true">
          {profile.initials}
        </div>

        <div className="about-introduction-copy">
  
          <p>{t('about.intro1')}</p>
          <p>{t('about.intro2')}</p>

        </div>
      </section>

      <section
        className="about-skills-section"
        aria-labelledby="skills-heading"
      >
        <div className="section-heading">
          <div>
            <h2 id="skills-heading">
              {t('about.skillsHeading')}
            </h2>
            <p>{t('about.skillsDescription')}</p>
          </div>
        </div>

        <div className="about-skills-grid">
          {skillGroups.map((group) => (
            <article className="about-skill-card" key={group.key}>
              <h3>{t(`about.skillGroups.${group.key}`)}</h3>

              <div className="about-skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {group.key === 'product'
                      ? t(`about.skills.${skill}`)
                      : skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-personal-section"
        aria-labelledby="personal-heading"
      >
        <div className="section-heading">
          <div>
            <h2 id="personal-heading">
              {t('about.factsHeading')}
            </h2>
            <p>{t('about.factsDescription')}</p>
          </div>
        </div>

        <div className="about-personal-grid">
          {personalFacts.map((fact) => (
            <article className="about-personal-card" key={fact.number}>
              <span className="about-fact-number">
                {fact.number}
              </span>
              <h3>{t(`about.facts.${fact.key}.title`)}</h3>
              <p>{t(`about.facts.${fact.key}.description`)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}