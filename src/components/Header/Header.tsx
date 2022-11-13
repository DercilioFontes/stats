import React from 'react';
import { Stack, IconButton } from 'rsuite';
import GithubIcon from '@rsuite/icons/legacy/Github';

const Header = () => {
  return (
    <Stack className="header" spacing={8}>
      <IconButton
        icon={<GithubIcon style={{ fontSize: 26 }} />}
        href="https://github.com/DercilioFontes/stats"
        target="_blank"
      />
    </Stack>
  );
};

export default Header;
