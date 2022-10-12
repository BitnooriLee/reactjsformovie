import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import Movie from './components/Movie';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
      </div>
  );
}
export default App;

