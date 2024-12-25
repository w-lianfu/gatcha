import {
  pink, red, blue, green, purple, orange,
  deepPurple, deepOrange,
} from '@mui/material/colors';

import Color from '@tool/color';

const MissPalette = {
  common: {
    black: Color.black(1),
    white: Color.white(1),
  },
  primary: {
    main: pink.A400, // #F50057FF
    dark: red.A400, // #FF1744FF
  },
  secondary: {
    main: blue.A700, // #2962FFFF
    dark: deepPurple.A400, // #651FFFFF
  },
  success: {
    main: green[800], // #2E7D32FF
    dark: green[900], // #1B5E20FF
  },
  info: {
    main: purple.A400, // D500F9FF
    dark: purple.A700, // AA00FFFF
    contrastText: Color.white(1),
  },
  warning: {
    main: orange[800], // #EF6C00FF
    dark: orange[900], // #E65100FF
    contrastText: Color.white(1),
  },
  error: {
    main: deepOrange.A400, // FF3D00FF
    dark: deepOrange.A700, // DD2C00FF
    contrastText: Color.white(1),
  },
  black: {
    main: Color.black(1),
    contrastText: Color.white(1),
  },
  white: {
    main: Color.white(1),
  },
};

export default MissPalette;
