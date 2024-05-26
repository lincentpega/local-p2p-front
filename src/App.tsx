import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {theme} from './theme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import Header from './components/Header/Header.tsx';
import AboutPage from './pages/AboutPage.tsx';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import keycloak from './keycloak.ts';
import React from 'react';
import P2PPage from './pages/P2PPage.tsx';

export default function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <React.StrictMode>
        <MantineProvider theme={theme}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/p2p' element={<P2PPage/>}/>
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </React.StrictMode>
    </ReactKeycloakProvider>
  );
}
