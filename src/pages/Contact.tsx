import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { profile } from '../config'

export default function Contact() {
  const { t } = useTranslation()

  const whatsappNumber = ''
  const whatsappDisplay = ''

  return (
    <div className="container page-content contact-page">
      <div className="page-intro">
  <h1>
          {t('contact.titleFirst')}{' '}
          <em>{t('contact.titleAccent')}</em>
        </h1>

        <p>{t('contact.description')}</p>
      </div>

      <div className="contact-methods">
        {profile.email && (
          <div className="contact-method">
            <Mail size={23} />

            <div>
              <strong>{t('contact.email')}</strong>
              <span>{profile.email}</span>
            </div>
          </div>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <Linkedin size={23} />

            <div>
              <strong>LinkedIn</strong>
              <span>{t('contact.linkedin')}</span>
            </div>

            <ArrowUpRight
              size={19}
              className="contact-arrow"
            />
          </a>
        )}

        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <Github size={23} />

            <div>
              <strong>GitHub</strong>
              <span>{t('contact.github')}</span>
            </div>

            <ArrowUpRight
              size={19}
              className="contact-arrow"
            />
          </a>
        )}

        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <MessageCircle size={23} />

            <div>
              <strong>WhatsApp</strong>
              <span>
                {whatsappDisplay || whatsappNumber}
              </span>
            </div>

            <ArrowUpRight
              size={19}
              className="contact-arrow"
            />
          </a>
        )}
      </div>
    </div>
  )
}
