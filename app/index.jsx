import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import colors from './components/Colors'

injectTapEventPlugin();

const muiTheme = getMuiTheme({

  palette: {
    primary1Color: `${colors.secondMain}`
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('App')
);
