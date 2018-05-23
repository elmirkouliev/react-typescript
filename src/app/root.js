import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Router from "./router";
import store from "store";

/**
 * Wrapper for pages using Redux
 */
const Root = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));