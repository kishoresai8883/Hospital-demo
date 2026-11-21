/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { AppointmentModal } from './components/AppointmentModal';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#97e078',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4bc3c3',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Inter", "Poppins", sans-serif',
  },
});

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [appointmentModalOpen, setAppointmentModalOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const renderPage = () => {
    if (currentRoute === 'home') {
      return (
        <HomePage
          onNavigate={setCurrentRoute}
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'about-us') {
      return (
        <AboutPage
          onNavigate={setCurrentRoute}
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'contact-us') {
      return <ContactPage onNavigate={setCurrentRoute} />;
    }

    return (
      <ServiceDetailPage
        slug={currentRoute}
        onNavigate={setCurrentRoute}
        onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
      />
    );
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Header
          currentRoute={currentRoute}
          onNavigate={setCurrentRoute}
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />

        <main className="flex-1">{renderPage()}</main>

        <Footer onNavigate={setCurrentRoute} />

        <AppointmentModal
          open={appointmentModalOpen}
          onClose={() => setAppointmentModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
