import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import Movie from './components/Movie';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/movie/:id" // reserved name for useParams
        element={<Detail />} />
      </Routes>
      <Routes>
        <Route path="/" 
        element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;