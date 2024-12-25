const Color = {
  primary: (opacity = 1) => `rgba(245, 0, 87, ${opacity})`,
  secondary: (opacity = 1) => `rgba(41, 98, 255, ${opacity})`,
  success: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
  info: (opacity = 1) => `rgba(213, 0, 249, ${opacity})`,
  warning: (opacity = 1) => `rgba(239, 108, 0, ${opacity})`,
  error: (opacity = 1) => `rgba(255, 61, 0, ${opacity})`,
  oliver: (opacity = 1) => `rgba(179, 238, 58, ${opacity})`,
  green: (opacity = 1) => `rgba(78, 238, 148, ${opacity})`,
  black: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
  dark: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
  gray: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
  white: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
};

export default Color;
