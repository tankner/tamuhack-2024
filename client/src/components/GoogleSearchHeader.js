import React from 'react';

const GoogleSearchHeader = () => {
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
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="80px" alt="Google" />
          </span>
          <span className="search">
            <input type="text" name="srch_fld" />
            <img id="mic" src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Microphone" />
            <img id="mag" src="https://enterprises.unc.edu/files/2018/05/search-icon.png" alt="Magnifying Glass" />
          </span>
          <span className="settings">
            <ul>
              <li><a href="#"><img id="apps" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAJlq1jPvJio0whyKaCG1Phlhe_8THBtUvZI4dEfiWjsTWl4x" alt="Apps" /></a></li>
              <li><a href="#"><img id="notifs" src="https://image.flaticon.com/icons/svg/61/61073.svg" alt="Notifications" /></a></li>
              <li><a href="#"><img id="acct" src="https://camo.githubusercontent.com/1e6798a976ebcf977b616713a1fb1b1ee53e8e13/68747470733a2f2f7261772e6769746875622e636f6d2f656c61646e6176612f6d6174657269616c2d6c65747465722d69636f6e732f6d61737465722f646973742f706e672f582e706e67" alt="Account" /></a></li>
            </ul>
          </span>
        </div>
        <div className="options">
          {/* inline-block list for navtools */}
          <ul>
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
          </ul>
        </div>

        <div className="results">
        </div>

      </body>

      </html>
    </>
  );
};

export default GoogleSearchHeader;
