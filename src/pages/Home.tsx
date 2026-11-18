import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  ClipboardList,
  Users,
  FileDown,
  GraduationCap,
  BriefcaseBusiness,
  Layers,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { profile } from '../config'
import { projectData } from '../projects'

const strengths = [
  {
    key: 'product',
    icon: <Compass size={23} />,
  },
  {
    key: 'planning',
    icon: <ClipboardList size={23} />,
  },
  {
    key: 'collaboration',
    icon: <Users size={23} />,
  },
]

const projectPreviews: Record<string, string> = {
  vehicle: '/images/VehicleMonitoring/Dashboard.png',
  stillia: '/images/Stillia/home.png',
}

const projectPaths: Record<string, string> = {
  vehicle: '/projects/vehicle-monitoring',
  stillia: '/projects/stillia',
}

export default function Home() {
  const { t } = useTranslation()
  const firstName = profile.name.split(' ')[0]

  return (
    <>
      <section className="hero hero-revised container">
        <div className="hero-copy">
          <span className="eyebrow">
            {t('home.eyebrow')}
          </span>

          <h1>
            {t('home.greeting', { name: firstName })}
            <em>.</em>
          </h1>

          <p className="hero-description">
            {t('home.description')}
          </p>

          <div className="hero-actions">

            <Link to="/about" className="button button-outline">
              {t('home.aboutLink')} <ArrowRight size={17} />
            </Link>
          </div>

          <div className="hero-quicklinks">
            <span className="small-accent">
              <span className="small-accent-dot" />
              {t('home.availability')}
            </span>

            {profile.cvPath && (
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noreferrer"
              >
                <FileDown size={16} />
                {t('home.viewCV')}
              </a>
            )}
          </div>
        </div>

        <aside
  className="hero-info hero-story"
  aria-label={t('home.glance.heading')}
>
  <div className="story-steps">
            <div>
              <span>
                <GraduationCap size={21} aria-hidden="true" />
              </span>
              <strong>{t('home.glance.education')}</strong>
              <p>{t('home.glance.educationDescription')}</p>
            </div>

            <div>
              <span>
                <BriefcaseBusiness size={20} aria-hidden="true" />
              </span>
              <strong>{t('home.glance.work')}</strong>
              <p>{t('home.glance.workDescription')}</p>
            </div>

            <div>
              <span>
                <Layers size={20} aria-hidden="true" />
              </span>
              <strong>{t('home.glance.technical')}</strong>
              <p>{t('home.glance.technicalDescription')}</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>{t('home.interests.heading')}</h2>

              <p>{t('home.interests.description')}</p>
            </div>
          </div>

          <div className="focus-grid">
            {strengths.map((strength) => (
              <article className="focus-card" key={strength.key}>
                <div className="focus-icon">{strength.icon}</div>
                <h3>
                  {t(`home.interests.${strength.key}.title`)}
                </h3>
                <p>
                  {t(`home.interests.${strength.key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <h2>{t('home.projects.heading')}</h2>
          </div>

          <Link to="/projects" className="inline-link">
            {t('home.projects.all')} <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="project-grid">
          {projectData.slice(0, 2).map((project) => {
            const projectPath = projectPaths[project.id] ?? '/projects'
            const preview = projectPreviews[project.id]

            return (
              <article className="project-tile" key={project.id}>
                <Link
                  to={projectPath}
                  className={`project-tile-art ${project.art}`}
                >
                  {project.id === 'stillia' ? (
                    <div className="stillia-home-preview">
                      <img
                        src="/images/Stillia/grounding.png"
                        alt={t('home.projects.stilliaGroundingAlt')}
                        loading="lazy"
                      />
                      <img
                        src="/images/Stillia/home.png"
                        alt={t('home.projects.stilliaHomeAlt')}
                        loading="lazy"
                      />
                      <img
                        src="/images/Stillia/weekly-statistics.png"
                        alt={t('home.projects.stilliaStatisticsAlt')}
                        loading="lazy"
                      />
                    </div>
                  ) : preview ? (
                    <img
                      src={preview}
                      alt={t('home.projects.vehicleAlt')}
                      loading="lazy"
                    />
                  ) : (
                    <div className="mock-window">
                      <div className="mock-dots">
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="mock-layout">
                        <span />
                        <div>
                          <b />
                          <b />
                          <b />
                        </div>
                      </div>
                    </div>
                  )}
                </Link>

                <div className="project-tile-copy">
                  <span className="eyebrow">
  {t(`projectData.${project.id}.category`)}
</span>
<h3>{project.title}</h3>
<p>{t(`projectData.${project.id}.summary`)}</p>

                  <Link to={projectPath} className="inline-link">
                    {t('home.projects.caseStudy')}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
