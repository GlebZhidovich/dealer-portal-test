import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {defaultTheme, GlobalStyle} from './themes';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
    </I18nextProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
