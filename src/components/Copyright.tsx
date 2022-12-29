import React from 'react';
import { Stack } from 'rsuite';

const Copyright = () => {
  return (
    <Stack className="copyright" justifyContent="center" style={{ height: 40, marginTop: 20 }}>
      <div className="container">
        <p>
          © 2022, Made with ❤️ by{' '}
          <a href="https://www.linkedin.com/in/derciliofontes/" target="_blank" rel="noreferrer">
            Dercilio Fontes
          </a>{' '}
          and{' '}
          <a href="https://github.com/rsuite/rsuite" target="_blank" rel="noreferrer">
            RSUITE
          </a>{' '}
          (forked template)
        </p>
      </div>
    </Stack>
  );
};

export default Copyright;
