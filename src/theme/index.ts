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
            boxSizing: 'border-box',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: { component: 'section' },
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.8rem 1.6rem',
          boxSizing: 'border-box',

          '&.Mui-disabled': {
            color: Color.black(0.7),
            backgroundColor: Color.black(0.2),
          },
        },
        textPrimary: {
          backgroundColor: Color.primary(0.1),
          '&:hover': { backgroundColor: Color.primary(0.2) },
        },
        textSecondary: {
          backgroundColor: Color.secondary(0.1),
          '&:hover': { backgroundColor: Color.secondary(0.2) },
        },
        textSuccess: {
          backgroundColor: Color.success(0.1),
          '&:hover': { backgroundColor: Color.success(0.2) },
        },
        textInfo: {
          // backgroundColor: Color.info(0.1),
          backgroundColor: Color.black(0.1),
          '&:hover': { backgroundColor: Color.black(0.2) },
        },
        textWarning: {
          backgroundColor: Color.warning(0.1),
          '&:hover': { backgroundColor: Color.warning(0.2) },
        },
        textError: {
          backgroundColor: Color.error(0.1),
          '&:hover': { backgroundColor: Color.error(0.2) },
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          position: 'relative',
          width: '5.6rem',

          '& .MuiSpeedDial-actions': {
            marginBottom: 0,
            paddingBottom: '1.2rem',
          },
          '& .MuiSpeedDial-fab': {
            position: 'relative',
            width: '5.6rem',
            height: '5.6rem',
          },
          '& .MuiSpeedDialAction-fab': {
            position: 'relative',
            width: '4.6rem',
            height: '4.6rem',
            margin: '0.8rem',
            fontSize: '2rem',
            color: Color.primary(1),
            backgroundColor: Color.white(1),
          },
        },
      },
    },
  },
});

export default Theme;