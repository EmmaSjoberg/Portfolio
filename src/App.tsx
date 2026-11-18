
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import VehicleMonitoring from './pages/VehicleMonitoring'
import Stillia from './pages/Stillia'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="projects/vehicle-monitoring"
            element={<VehicleMonitoring />}
          />
          <Route path="projects/stillia" element={<Stillia />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <div className="container page-content">
                <h1>Page not found.</h1>
                <p>Try the navigation above.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

