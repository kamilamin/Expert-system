import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title='Expert System For Dermatologist' />
      </MuiThemeProvider>
    );
  }
}

export default App;
