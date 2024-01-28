import React from 'react';
import Loading from './components/LoadingPage';
import SearchPage from './components/SearchPage';
import SearchResult from './components/SearchResult';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading){
    return (
      <Loading/>
    );
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div className="tc ma0 pa4 min-vh-100"><SearchPage/></div>} />
        <Route path="/searchresults" element={<SearchResult/>} />
      </Routes>
    </Router>
    // <div className="tc ma0 pa4 min-vh-100">
    //   <SearchPage/>
    // </div>
  );
}

export default App;
