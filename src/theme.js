import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9AC9FB',
    },
    secondary: {
      main: '#DB5752',
    },
  },
  logo: {
    margin: 'auto',
    width: '100px',
    height: '100px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 975,
      lg: 1300,
      xl: 1920,
    },
  },
});

export default theme;

