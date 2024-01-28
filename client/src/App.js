import React from 'react';
import SearchPage from './components/SearchPage';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<div className="tc ma0 pa4 min-vh-100"><SearchPage/></div>} />
    //   </Routes>
    // </Router>
    <div className="tc ma0 pa4 min-vh-100">
      <SearchPage/>
    </div>
  );
}

export default App;
