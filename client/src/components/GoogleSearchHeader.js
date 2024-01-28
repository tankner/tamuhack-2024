import React from 'react';
import { useSearchParams } from 'react-router-dom';



const GoogleSearchHeader = () => {
  const [searchParams] = useSearchParams();
  const searchEngine = searchParams.get('search-engine'); // Extract "search-engine" parameter

  return (
    <>
      <html lang="en">

      <head>
        <link rel="stylesheet" href="./src/components/style.css" />
        <title>Build this webpage - Google Search</title>
      </head>

      <body>

        <div className="head">
          {/* logo, search, settings, options */}
          <span className="logo">
            <a href="/">
            <img src="LUMOS.png" width="90px" alt="LUMOS"/>
            </a>
          </span>
          <span className="search">
            <input type="text" name="srch_fld" />
            <img src={`${searchEngine}logo2.png`} alt="Google" width="25" height="25"/>
          </span>
        </div>
        <div className="options">
          {/* inline-block list for navtools */}
          {/* <ul>
            <span className="left_opts">
              <li><input type="button" name="all" value="All" /></li>
              <li><input type="button" name="news" value="News" /></li>
              <li><input type="button" name="videos" value="Videos" /></li>
              <li><input type="button" name="shopping" value="Shopping" /></li>
              <li><input type="button" name="maps" value="Maps" /></li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">More</button>
                  <div className="dropdown-content">
                    <a href="#">Images</a>
                    <a href="#">Books</a>
                    <a href="#">Flights</a>
                    <a href="#">Finance</a>
                    <a href="#">Personal</a>
                  </div>
                </div>
              </li>
            </span>
            <span className="right_opts">
              <li>
                <div className="dropdown">
                  <button className="dropbtn">Settings</button>
                  <div className="dropdown-content">
                    <a href="#">Search settings</a>
                    <a href="#">Languages</a>
                    <a href="#">Turn on SafeSearch</a>
                    <a href="#">Hide private results</a>
                    <a href="#">Advanced search</a>
                    <a href="#">Your data in Search</a>
                    <a href="#">History</a>
                    <a href="#">Search help</a>
                  </div>
                </div>
              </li>
              <li><input type="button" name="tools" value="Tools" /></li>
            </span>
          </ul>
          <ul>
          </ul> */}
        </div>

        <div className="results">
        </div>

      </body>

      </html>
    </>
  );
};

export default GoogleSearchHeader;
