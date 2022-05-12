import { Routes, Route } from "react-router-dom";
import React from 'react';
import Nevbar from "./Component/Nevbar.js";
import Newslist from "./Component/Newslist.js"
import Date from "./Component/Time.js"
import  './App.css'

function App() {
  const pageSize = 5;
  return (
    <>
      <div className="App">
      <Nevbar />
        <Routes>
            <Route path="/" element={<Newslist pageSize={pageSize} category="general"/>} />
            <Route path="/business" element={<Newslist pageSize={pageSize} category="business"/>} />
            <Route path="/entertainment" element={<Newslist pageSize={pageSize} category="entertainment"/>} />
            <Route path="/general" element={<Newslist pageSize={pageSize} category="general"/>} />
            <Route path="/health" element={<Newslist pageSize={pageSize} category="health"/>} />
            <Route path="/science" element={<Newslist pageSize={pageSize} category="science"/>} />
            <Route path="/sports" element={<Newslist pageSize={pageSize} category="sports"/>} />
            <Route path="/technology" element={<Newslist pageSize={pageSize} category="technology"/>} />
            <Route path="/science" element={<Newslist pageSize={pageSize} category="science"/>} />
        </Routes>
    </div>
    </>
  );
}
export default App;
