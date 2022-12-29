import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enUS from 'rsuite/locales/en_US';
import locales from './locales';
import Frame from './components/Frame';
import HistogramPage from './pages/histogram';
import Error404Page from './pages/404';
import { appNavs } from './config';
import Info from './pages/info';

const App = () => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <CustomProvider locale={enUS}>
        <Routes>
          <Route path="/" element={<Frame navs={appNavs} />}>
            <Route index element={<Navigate to="/histogram" />} />
            <Route path="histogram" element={<HistogramPage />} />
            <Route path="info" element={<Info />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </CustomProvider>
    </IntlProvider>
  );
};

export default App;
