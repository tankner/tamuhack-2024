// SearchPage.js

import React, { useState , useRef} from 'react';
import SettingsButton from './SettingsButton';
import '../styles.css';

function SearchPage() {
  const [searchEngine, setSearchEngine] = useState('Google');
  const handleSearchEngineChange = (newSearchEngine) => {
    setSearchEngine(newSearchEngine);
  };
  let searchTerm = useRef();

  const getLogoPath = (searchEngine) => {
    // Assuming logos are in the public directory
    return `${process.env.PUBLIC_URL}/${searchEngine.toLowerCase()}logo.png`;
  };

  return (
    <section className="garamond">
      <div className="navy georgia ma0 header">
        <h1>Lumos</h1>
        <SettingsButton
          searchEngine={searchEngine}
          onSearchEngineChange={handleSearchEngineChange}
        />
      </div>
      <div class="parent-container">
        <img src={getLogoPath(searchEngine)} alt={`${searchEngine} Logo`}/>
        <div className="pa2">
          <input
            ref = {searchTerm}
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search"
            onKeyDown={(e) => {
              if(e.key === 'Enter') {
                // placeholder
                window.location.href = `searchresults?searchTerm=${searchTerm.current.value}`;
              }
            }}
          />
        </div>
      </div>
      
    </section>
  );
}

export default SearchPage;
