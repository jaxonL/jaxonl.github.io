import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Construction } from './components/construction/construction';
import blueGrey from '@material-ui/core/colors/blueGrey'
import teal from '@material-ui/core/colors/teal'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    background: blueGrey,
    type: "dark"
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Construction></Construction>
      </MuiThemeProvider>
    );
  }
}

export default App;
