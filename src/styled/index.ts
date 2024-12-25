import { Button } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

const LinkButton = styled(Button)({
  textDecoration: 'underline',
  color: Color.secondary(1),
  backgroundColor: Color.secondary(0),

  '&:hover': {
    textDecoration: 'underline',
    backgroundColor: Color.secondary(0.1),
  },
});

export { LinkButton };
