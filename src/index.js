// Vendor Components
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom Components
import App from './App';

// Misc
import './index.css';
import Theme from './Theme';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
