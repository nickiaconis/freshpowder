/* Vendor */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { IntlProvider } from 'react-intl';

/* Internal */
import AppLayout from "./AppLayout/AppLayout";
import { rootReducer } from "./reducers";

// Let's get this party started
const store = createStore(rootReducer, applyMiddleware(thunk));

const searchParams = new URLSearchParams(window.location.search);
const locale = searchParams.get('l') || (navigator as { [key: string]: any }).userLanguage || navigator.language

/**
 * Entrypoint for our application. Is the only part which should be aware of
 * the DOM, window object, instansiating stores, etc
 */
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale}>
      <AppLayout />
    </IntlProvider>
  </Provider>,
  document.getElementById("app")
);
