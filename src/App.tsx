
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import PastEventsPage from './pages/PastEventsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import TeamPage from './pages/TeamPage';

// Import components
import Layout from './components/layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/sobre" element={<Layout><AboutPage /></Layout>} />
            <Route path="/eventos" element={<Layout><EventsPage /></Layout>} />
            <Route path="/eventos/passados" element={<Layout><PastEventsPage /></Layout>} />
            <Route path="/equipe" element={<Layout><TeamPage /></Layout>} />
            <Route path="/contato" element={<Layout><ContactPage /></Layout>} />
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
