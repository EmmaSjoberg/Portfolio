import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { profile } from '../config'

const nav = [
  { to: '/', key: 'home', end: true },
  { to: '/projects', key: 'projects' },
  { to: '/about', key: 'about' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const close = () => setOpen(false)
  const language = i18n.resolvedLanguage === 'sv' ? 'sv' : 'en'

  const changeLanguage = (lang: 'en' | 'sv') => {
    void i18n.changeLanguage(lang)
    localStorage.setItem('portfolio-language', lang)
    document.documentElement.lang = lang
    close()
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t('layout.skip')}
      </a>

      <header className="site-header">
        <div className="container nav-inner">
          <Link to="/" className="brand" onClick={close}>
            <span className="brand-symbol">
              e<span>.</span>
            </span>
            <span className="brand-text">
              portfolio
              <span className="brand-suffix">
                {' / '}{t('layout.brandSuffix')}
              </span>
            </span>
          </Link>

          <nav
            id="primary-navigation"
            className={`nav-links ${open ? 'nav-open' : ''}`}
            aria-label={t('layout.mainNavigation')}
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={close}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {t(`navigation.${item.key}`)}
              </NavLink>
            ))}

            <div
              className="language-switch"
              role="group"
              aria-label={t('layout.language')}
            >
              <button
                type="button"
                className={language === 'en' ? 'language-active' : ''}
                onClick={() => changeLanguage('en')}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                className={language === 'sv' ? 'language-active' : ''}
                onClick={() => changeLanguage('sv')}
                aria-pressed={language === 'sv'}
              >
                SV
              </button>
            </div>

            <Link to="/contact" className="nav-mobile-cta" onClick={close}>
              {t('layout.getInTouch')} <ArrowUpRight size={15} />
            </Link>
          </nav>

          <Link to="/contact" className="nav-cta">
            {t('layout.letsTalk')} <ArrowUpRight size={15} />
          </Link>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? t('layout.closeMenu') : t('layout.openMenu')}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main id="main-content" key={location.pathname} tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <Link to="/" className="footer-brand">
              {profile.name}<span className="accent">.</span>
            </Link>

            {profile.email && (
              <a className="footer-email" href={`mailto:${profile.email}`}>
                <Mail size={17} aria-hidden="true" />
                {profile.email}
              </a>
            )}
          </div>

          <div className="footer-right">
            <div className="socials">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>

            <span>© {new Date().getFullYear()} Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
