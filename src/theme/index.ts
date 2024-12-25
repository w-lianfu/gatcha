import { createTheme } from '@mui/material/styles';

import MuiPalette from './mui-palette';
import MuiTypography from './mui-typography';
import Color from '@tool/color';

const Theme = createTheme({
  shape: { borderRadius: 0 },
  palette: MuiPalette,
  typography: MuiTypography,
  components: {
    MuiPaper: {
      defaultProps: {
        square: true,
        elevation: 0,
        component: 'section',
      },
      styleOverrides: {
        root: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: Color.white(1),

          '& .MuiBox-root': {
            display: 'flex',
            flexWrap: 'wrap',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: { component: 'section' },
      styleOverrides: {
        root: { position: 'relative' },
      },
    },
  },
});

export default Theme;