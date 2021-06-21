import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './index.scss';

import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";

import RestoService from "./services/resto-service";
import ErrorBoundry from "./components/error-boundry";
import RestoServiceContext from "./components/resto-service-context";

const restoService = new RestoService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

