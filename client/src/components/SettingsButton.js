import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

function SettingsButton({ searchEngine, onSearchEngineChange }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleSliderChange = (event, newValue) => {
      // Convert slider value to corresponding search engine
      const searchEngines = ['Google', 'Bing', 'Yahoo'];
      const newSearchEngine = searchEngines[newValue];
      
      // Update the parent component state using onSearchEngineChange
      onSearchEngineChange(newSearchEngine);
    };
  
    return (
      <div className="settings-button">
        <Button
          onClick={handleClick}
          aria-controls="dropdown-menu"
          aria-haspopup="true"
        >
          Settings
        </Button>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Use a Slider for selecting search engine */}
          <MenuItem>
            <div>
              <p>   Select Search Engine   </p>
              <Slider
                value={['Google', 'Bing', 'Yahoo'].indexOf(searchEngine)}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                step={1}
                marks={[
                  { value: 0, label: 'Google' },
                  { value: 1, label: 'Bing' },
                  { value: 2, label: 'Yahoo' },
                ]}
                min={0}
                max={2}
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }
  
  export default SettingsButton;
  