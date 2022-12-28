import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enUS from 'rsuite/locales/en_GB';
import locales from './locales';
import Frame from './components/Frame';
import HistogramPage from './pages';
import Error404Page from './pages/authentication/404';
import Error500Page from './pages/authentication/500';
import { appNavs } from './config';

const App = () => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <CustomProvider locale={enUS}>
        <Routes>
          <Route path="/" element={<Frame navs={appNavs} />}>
            <Route index element={<HistogramPage />} />
            <Route path="histogram" element={<HistogramPage />} />
            <Route path="error-404" element={<Error404Page />} />
            <Route path="error-500" element={<Error500Page />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </CustomProvider>
    </IntlProvider>
  );
};

export default App;
