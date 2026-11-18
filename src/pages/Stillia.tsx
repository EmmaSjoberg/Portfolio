import {
  ArrowLeft,
  HeartPulse,
  Timer,
  ChartNoAxesCombined,
  Palette,
  Smartphone,
  Wind,
  Search,
  ClipboardList,
  FlaskConical,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProjectSection from '../components/ProjectSection'

const features = [
  { key: 'sessions', icon: <Timer size={22} /> },
  { key: 'grounding', icon: <HeartPulse size={22} /> },
  { key: 'breathing', icon: <Wind size={22} /> },
  { key: 'insights', icon: <ChartNoAxesCombined size={22} /> },
  { key: 'interface', icon: <Palette size={22} /> },
  { key: 'demo', icon: <Smartphone size={22} /> },
]

const surveyResults = ['respondents', 'unplanned', 'interest', 'signals'] as const

const usageActivities = [
  { key: 'social', count: 15 },
  { key: 'shortVideo', count: 12 },
  { key: 'gaming', count: 8 },
  { key: 'streaming', count: 3 },
  { key: 'other', count: 2 },
]

const designDecisions = ['longer', 'subtle', 'control', 'insights'] as const

const settingsImages = [
  'settings1.png',
  'settings2.png',
  'settings3.png',
]

const statisticsImages = [
  { src: 'home.png', key: 'home' },
  { src: 'weekly-statistics.png', key: 'weekly' },
  { src: 'weekly-statistics2.png', key: 'weeklyInsights' },
  { src: 'monthly-statistics.png', key: 'monthly' },
]

export default function Stillia() {
  const { t } = useTranslation()

  return (
    <div className="container page-content stillia-study">
      <Link to="/projects" className="inline-link project-back-link">
        <ArrowLeft size={16} />
        {t('stillia.back')}
      </Link>

      <div className="page-intro project-intro">
        <h1>
          Stillia<em>.</em>
        </h1>
        <p>{t('stillia.description')}</p>
      </div>

      <div className="stillia-hero">
        <div className="stillia-hero-copy">
          <h2>{t('stillia.idea.heading')}</h2>
          <p>{t('stillia.idea.paragraph1')}</p>
          <p>{t('stillia.idea.paragraph2')}</p>
        </div>

        <div className="stillia-hero-image">
          <img
            src="/images/Stillia/grounding.png"
            alt={t('stillia.idea.imageAlt')}
          />
        </div>
      </div>

      <div className="project-meta">
        <span>
          <strong>{t('stillia.meta.origin')}</strong>
          {t('stillia.meta.originValue')}
        </span>
        <span>
          <strong>{t('stillia.meta.collaboration')}</strong>
          {t('stillia.meta.collaborationValue')}
        </span>
        <span>
          <strong>{t('stillia.meta.role')}</strong>
          {t('stillia.meta.roleValue')}
        </span>
        <span>
          <strong>{t('stillia.meta.technology')}</strong>
          {t('stillia.meta.technologyValue')}
        </span>
      </div>

      <ProjectSection
        eyebrow={t('stillia.sections.challenge.eyebrow')}
        title={t('stillia.sections.challenge.heading')}
      >
        <p>{t('stillia.sections.challenge.p1')}</p>
        <p>{t('stillia.sections.challenge.p2')}</p>
        <p>{t('stillia.sections.challenge.p3')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.research.eyebrow')}
        title={t('stillia.sections.research.heading')}
      >
        <p>{t('stillia.sections.research.p1')}</p>
        <p>{t('stillia.sections.research.p2')}</p>

        <div className="stillia-feature-grid stillia-survey-grid">
          {surveyResults.map(result => (
            <article key={result} className="stillia-feature">
              <h3>{t(`stillia.survey.${result}.value`)}</h3>
              <strong>{t(`stillia.survey.${result}.label`)}</strong>
              <p>{t(`stillia.survey.${result}.description`)}</p>
            </article>
          ))}
        </div>

        <h3>{t('stillia.research.unplannedHeading')}</h3>
        <p>{t('stillia.sections.research.p3')}</p>

        <div className="stillia-feature-grid stillia-activities-grid">
          {usageActivities.map(activity => (
            <article key={activity.key} className="stillia-feature">
              <h3>{activity.count} / 40</h3>
              <p>{t(`stillia.activities.${activity.key}`)}</p>
            </article>
          ))}
        </div>

        <h3>{t('stillia.research.feedbackHeading')}</h3>
        <p>{t('stillia.sections.research.p4')}</p>
        <p>{t('stillia.sections.research.p5')}</p>
        <p>{t('stillia.sections.research.p6')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.competitors.eyebrow')}
        title={t('stillia.sections.competitors.heading')}
      >
        <p>{t('stillia.sections.competitors.p1')}</p>
        <p>{t('stillia.sections.competitors.p2')}</p>

        <div className="stillia-feature-grid">
          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <Timer size={22} />
            </div>
            <h3>{t('stillia.competitorCards.blocking.title')}</h3>
            <p>{t('stillia.competitorCards.blocking.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <Search size={22} />
            </div>
            <h3>{t('stillia.competitorCards.mindfulness.title')}</h3>
            <p>{t('stillia.competitorCards.mindfulness.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <HeartPulse size={22} />
            </div>
            <h3>{t('stillia.competitorCards.approach.title')}</h3>
            <p>{t('stillia.competitorCards.approach.description')}</p>
          </article>
        </div>

        <p>{t('stillia.sections.competitors.p3')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.requirements.eyebrow')}
        title={t('stillia.sections.requirements.heading')}
      >
        <p>{t('stillia.sections.requirements.p1')}</p>
        <p>{t('stillia.sections.requirements.p2')}</p>

        <div className="stillia-feature-grid">
          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <ClipboardList size={22} />
            </div>
            <h3>{t('stillia.requirementCards.count.title')}</h3>
            <p>{t('stillia.requirementCards.count.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <Palette size={22} />
            </div>
            <h3>{t('stillia.requirementCards.design.title')}</h3>
            <p>{t('stillia.requirementCards.design.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <Smartphone size={22} />
            </div>
            <h3>{t('stillia.requirementCards.android.title')}</h3>
            <p>{t('stillia.requirementCards.android.description')}</p>
          </article>
        </div>

        <h3>{t('stillia.requirements.decisionsHeading')}</h3>

        <div className="stillia-feature-grid stillia-decisions-grid">
          {designDecisions.map(item => (
            <article key={item} className="stillia-feature">
              <span className="eyebrow">
                {t('stillia.requirements.userNeed')}
              </span>
              <p>{t(`stillia.decisions.${item}.finding`)}</p>

              <span className="eyebrow">
                {t('stillia.requirements.designResponse')}
              </span>
              <p>{t(`stillia.decisions.${item}.decision`)}</p>
            </article>
          ))}
        </div>

        <p>{t('stillia.sections.requirements.p3')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.experience.eyebrow')}
        title={t('stillia.sections.experience.heading')}
      >
        <h3>{t('stillia.experience.sessionHeading')}</h3>
        <p>{t('stillia.sections.experience.p1')}</p>
        <p>{t('stillia.sections.experience.p2')}</p>

        <div className="stillia-video-section">
          <video
            className="stillia-video"
            controls
            playsInline
            preload="metadata"
            aria-label={t('stillia.video.sessionAria')}
          >
            <source
              src="/videos/stillia/choose-session-length.mp4"
              type="video/mp4"
            />
            {t('stillia.video.unsupported')}
          </video>
          <p className="stillia-video-caption">
            {t('stillia.video.sessionCaption')}
          </p>
        </div>

        <h3>{t('stillia.experience.groundingHeading')}</h3>
        <p>{t('stillia.sections.experience.p3')}</p>
        <p>{t('stillia.sections.experience.p4')}</p>

        <div className="stillia-video-section">
          <video
            className="stillia-video"
            controls
            playsInline
            preload="metadata"
            aria-label={t('stillia.video.groundingAria')}
          >
            <source
              src="/videos/stillia/grounding.mp4"
              type="video/mp4"
            />
            {t('stillia.video.unsupported')}
          </video>
          <p className="stillia-video-caption">
            {t('stillia.video.groundingCaption')}
          </p>
        </div>

        <h3>{t('stillia.experience.howHeading')}</h3>
        <p>{t('stillia.sections.experience.p5')}</p>
        <p>{t('stillia.sections.experience.p6')}</p>
        <p>{t('stillia.sections.experience.p7')}</p>
        <p>{t('stillia.sections.experience.p8')}</p>
        <p>{t('stillia.sections.experience.p9')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.application.eyebrow')}
        title={t('stillia.sections.application.heading')}
      >
        <p>{t('stillia.sections.application.p1')}</p>

        <div className="stillia-feature-grid">
          {features.map(feature => (
            <article key={feature.key} className="stillia-feature">
              <div className="stillia-feature-icon">
                {feature.icon}
              </div>
              <h3>{t(`stillia.features.${feature.key}.title`)}</h3>
              <p>{t(`stillia.features.${feature.key}.text`)}</p>
            </article>
          ))}
        </div>

        <div className="stillia-gallery">
          <h3>{t('stillia.application.settingsHeading')}</h3>
          <p>{t('stillia.sections.application.p2')}</p>

          <div className="stillia-screenshot-grid stillia-settings-grid">
  {settingsImages.map((image, index) => (
    <figure key={image}>
      <img
        src={`/images/Stillia/${image}`}
        alt={`Stillia settings screen ${index + 1}`}
        loading="lazy"
      />
    </figure>
  ))}
</div>
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.statistics.eyebrow')}
        title={t('stillia.sections.statistics.heading')}
      >
        <p>{t('stillia.sections.statistics.p1')}</p>
        <p>{t('stillia.sections.statistics.p2')}</p>

        <div className="stillia-gallery">
          <h3>{t('stillia.statistics.galleryHeading')}</h3>

          <div className="stillia-screenshot-grid stillia-statistics-grid">
            {statisticsImages.map(image => (
              <figure key={image.src}>
                <img
                  src={`/images/Stillia/${image.src}`}
                  alt={`Stillia ${t(`stillia.statisticsImages.${image.key}`).toLowerCase()}`}
                  loading="lazy"
                />
                <figcaption>
                  {t(`stillia.statisticsImages.${image.key}`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.development.eyebrow')}
        title={t('stillia.sections.development.heading')}
      >
        <p>{t('stillia.sections.development.p1')}</p>
        <p>{t('stillia.sections.development.p2')}</p>
        <p>{t('stillia.sections.development.p3')}</p>

        <div className="stillia-feature-grid">
          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <FlaskConical size={22} />
            </div>
            <h3>{t('stillia.developmentCards.functional.title')}</h3>
            <p>{t('stillia.developmentCards.functional.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <Search size={22} />
            </div>
            <h3>{t('stillia.developmentCards.evaluation.title')}</h3>
            <p>{t('stillia.developmentCards.evaluation.description')}</p>
          </article>

          <article className="stillia-feature">
            <div className="stillia-feature-icon">
              <ClipboardList size={22} />
            </div>
            <h3>{t('stillia.developmentCards.issues.title')}</h3>
            <p>{t('stillia.developmentCards.issues.description')}</p>
          </article>
        </div>

        <h3>{t('stillia.development.findingsHeading')}</h3>
        <p>{t('stillia.sections.development.p4')}</p>
        <p>{t('stillia.sections.development.p5')}</p>
        <p>{t('stillia.sections.development.p6')}</p>
        <p>{t('stillia.sections.development.p7')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.context.eyebrow')}
        title={t('stillia.sections.context.heading')}
      >
        <p>{t('stillia.sections.context.p1')}</p>
        <p>{t('stillia.sections.context.p2')}</p>
        <p>{t('stillia.sections.context.p3')}</p>
        <p>{t('stillia.sections.context.p4')}</p>
      </ProjectSection>

      <ProjectSection
        eyebrow={t('stillia.sections.reflection.eyebrow')}
        title={t('stillia.sections.reflection.heading')}
      >
        <p>{t('stillia.sections.reflection.p1')}</p>
        <p>{t('stillia.sections.reflection.p2')}</p>
        <p>{t('stillia.sections.reflection.p3')}</p>
        <p>{t('stillia.sections.reflection.p4')}</p>
      </ProjectSection>

    </div>
  )
}
