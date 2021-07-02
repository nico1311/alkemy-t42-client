import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme ({
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
});

export default theme;