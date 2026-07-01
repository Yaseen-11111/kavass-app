import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* import.meta.env.BASE_URL will equal '/' locally and '/kavass-app/' in build */}
        <Router basename={import.meta.env.BASE_URL}>
            <App />
        </Router>
    </React.StrictMode>,
);