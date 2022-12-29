import React from 'react';
import { Input } from 'rsuite';

const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <Input style={{ width: 200 }} {...props} as="textarea" ref={ref} />
));

export default Textarea;
