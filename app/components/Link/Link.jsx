import React from 'react';
import { Link } from 'wouter';

export const LinkBehavior = React.forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link ref={ref} {...props} />
));
