import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from 'react-router-dom';
import "./styles.css";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
/*
<HashRouter basename={process.env.PUBLIC_URL}>
    <App />
</HashRouter>
*/


);


