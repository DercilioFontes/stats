import { Icon } from '@rsuite/icons';
import React, { ReactNode } from 'react';
import { MdOutlineInfo } from 'react-icons/md';
import { Button, Popover, Whisper } from 'rsuite';

const InfoPopover = ({ title, content }: { title: string; content: ReactNode }) => {
  return (
    <Whisper
      trigger="click"
      placement="autoHorizontalEnd"
      controlId={`control-id-right`}
      speaker={<Popover title={title}>{content}</Popover>}
    >
      <Button appearance="subtle">
        <Icon style={{ color: 'var(--rs-btn-primary-bg)' }} as={MdOutlineInfo} />
      </Button>
    </Whisper>
  );
};

export default InfoPopover;
