import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectData } from '../projects'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div className="container page-content projects-page">
      <div className="page-intro">
        <h1>
          {t('projects.title')}{' '}
          <em>{t('projects.titleAccent')}</em>
        </h1>

        <p>{t('projects.description')}</p>
      </div>

      <div className="project-overview-grid">
        {projectData.map((p) => {
          const projectLink =
            p.id === 'vehicle'
              ? '/projects/vehicle-monitoring'
              : p.id === 'stillia'
                ? '/projects/stillia'
                : null

          return (
            <article className="project-overview-card" key={p.id}>
              <div className="project-overview-image">
                {p.id === 'vehicle' ? (
                  <img
                    src="/images/VehicleMonitoring/Dashboard.png"
                    alt={t('projects.vehicleAlt')}
                    loading="lazy"
                  />
                ) : p.id === 'stillia' ? (
                  <div className="stillia-home-preview">
                    <img
                      src="/images/Stillia/grounding.png"
                      alt={t('projects.stilliaGroundingAlt')}
                      loading="lazy"
                    />
                    <img
                      src="/images/Stillia/home.png"
                      alt={t('projects.stilliaHomeAlt')}
                      loading="lazy"
                    />
                    <img
                      src="/images/Stillia/weekly-statistics.png"
                      alt={t('projects.stilliaStatisticsAlt')}
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>

              <div className="project-overview-content">
                <h2>{p.title}</h2>

                <p>{t(`projectData.${p.id}.summary`)}</p>

                <div className="project-overview-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {projectLink && (
                  <Link
                    to={projectLink}
                    className="inline-link"
                  >
                    {t('projects.viewCaseStudy')}
                    <ArrowUpRight size={17} />
                  </Link>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
