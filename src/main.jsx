import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/themify-icons.css';
import './css/animate.css';
import './css/flaticon_medically.css';
import './sass/style.scss';

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </PersistGate>
    </Provider>
);

// Vite doesn’t use reportWebVitals by default, but you can keep it if needed

