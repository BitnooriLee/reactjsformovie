import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import Movie from './components/Movie';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <div>
        <Routes>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} // reserved name for useParams
        element={<Detail />}/>
      </Routes>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`}
        element={<Home />}/>
      </Routes>
      </div>
  );
}
export default App;

