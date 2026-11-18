import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProjectSection from '../components/ProjectSection'

const imageBase = '/images/VehicleMonitoring/'

type Screenshot = {
  file: string
  key: string
}

const screenshots: Record<string, Screenshot[]> = {
  dashboard: [
    { file: 'Dashboard.png', key: 'dashboard.first' },
    { file: 'Dashboard2.png', key: 'dashboard.second' },
  ],
  details: [
    { file: 'VehicleMonitoringDetail.png', key: 'details.first' },
    { file: 'VehicleMonitoringDetail2.png', key: 'details.second' },
  ],
  analytics: [
    { file: 'VehicleMonitoringAnalytics.png', key: 'analytics.first' },
    { file: 'VehicleMonitoringAnalytics2.png', key: 'analytics.second' },
  ],
}

const featureKeys = ['cpu', 'ram', 'boot', 'scope']

function ScreenshotGallery({ items }: { items: Screenshot[] }) {
  const { t } = useTranslation()

  return (
    <div className="vehicle-gallery">
      {items.map((item) => (
        <figure key={item.file}>
          <img
            loading="lazy"
            src={`${imageBase}${item.file}`}
            alt={t(`vehicle.screenshots.${item.key}.alt`)}
          />
          <figcaption>
            {t(`vehicle.screenshots.${item.key}.label`)}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function VehicleMonitoring() {
  const { t } = useTranslation()

  const section = (key: string, field: string) =>
    t(`vehicle.sections.${key}.${field}`)

  return (
    <div className="container page-content vehicle-study">
      <Link to="/projects" className="inline-link project-back-link">
        <ArrowLeft size={16} />
        {t('vehicle.back')}
      </Link>

      <div className="page-intro project-intro">
        <h1>
          {t('vehicle.titleFirst')}{' '}
          {t('vehicle.titleAccent')}<em>.</em>
        </h1>
        <p>{t('vehicle.description')}</p>
      </div>

      <img
        className="vehicle-hero-image"
        src={`${imageBase}Dashboard.png`}
        alt={t('vehicle.heroAlt')}
      />

      <div className="project-meta">
        <span>
          <strong>{t('vehicle.meta.context')}</strong>
          {t('vehicle.meta.contextValue')}
        </span>
        <span>
          <strong>{t('vehicle.meta.team')}</strong>
          {t('vehicle.meta.teamValue')}
        </span>
        <span>
          <strong>{t('vehicle.meta.stack')}</strong>
          {t('vehicle.meta.stackValue')}
        </span>
        <span>
          <strong>{t('vehicle.meta.demo')}</strong>
          {t('vehicle.meta.demoValue')}
        </span>
      </div>

      <ProjectSection
        eyebrow={section('overview', 'eyebrow')}
        title={section('overview', 'title')}
      >
        <p>{section('overview', 'p1')}</p>
        <p>{section('overview', 'p2')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('challenge', 'eyebrow')}
        title={section('challenge', 'title')}
      >
        <p>{section('challenge', 'p1')}</p>
        <p>{section('challenge', 'p2')}</p>
        <p>{section('challenge', 'p3')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('requirements', 'eyebrow')}
        title={section('requirements', 'title')}
      >
        <p>{section('requirements', 'p1')}</p>

        <div className="vehicle-feature-grid">
          {featureKeys.map(key => (
            <article key={key}>
              <h3>
                {section('requirements', `features.${key}.title`)}
              </h3>
              <p>
                {section('requirements', `features.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        <p>{section('requirements', 'p2')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('application', 'eyebrow')}
        title={section('application', 'title')}
      >
        <p>{section('application', 'p1')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('dashboard', 'eyebrow')}
        title={section('dashboard', 'title')}
      >
        <p>{section('dashboard', 'p1')}</p>
        <p>{section('dashboard', 'p2')}</p>
        <ScreenshotGallery items={screenshots.dashboard} />
      </ProjectSection>

      <ProjectSection
        eyebrow={section('details', 'eyebrow')}
        title={section('details', 'title')}
      >
        <p>{section('details', 'p1')}</p>
        <p>{section('details', 'p2')}</p>
        <ScreenshotGallery items={screenshots.details} />
      </ProjectSection>

      <ProjectSection
        eyebrow={section('analytics', 'eyebrow')}
        title={section('analytics', 'title')}
      >
        <p>{section('analytics', 'p1')}</p>
        <p>{section('analytics', 'p2')}</p>
        <ScreenshotGallery items={screenshots.analytics} />
      </ProjectSection>

      <ProjectSection
        eyebrow={section('teamwork', 'eyebrow')}
        title={section('teamwork', 'title')}
      >
        <h3>{section('teamwork', 'teamTitle')}</h3>
        <p>{section('teamwork', 'p1')}</p>

        <h3>{section('teamwork', 'independentTitle')}</h3>
        <p>{section('teamwork', 'p2')}</p>
        <p>{section('teamwork', 'p3')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('technical', 'eyebrow')}
        title={section('technical', 'title')}
      >
        <p>{section('technical', 'p1')}</p>

        <div className="vehicle-architecture">
          {section('technical', 'architecture.views')}{' '}
          <span>→</span>{' '}
          {section('technical', 'architecture.controllers')}{' '}
          <span>→</span>{' '}
          {section('technical', 'architecture.services')}{' '}
          <span>→</span>{' '}
          {section('technical', 'architecture.repositories')}{' '}
          <span>→</span>{' '}
          {section('technical', 'architecture.database')}
        </div>

        <p>{section('technical', 'p2')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={section('reflection', 'eyebrow')}
        title={section('reflection', 'title')}
      >
        <p>{section('reflection', 'p1')}</p>
        <p>{section('reflection', 'p2')}</p>
        <p>{section('reflection', 'p3')}</p>
      </ProjectSection>

    </div>
  )
}
