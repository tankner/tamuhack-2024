import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

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
      console.log("New Value", newValue)
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
          Change Engine
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
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => {
                    const selectedEngine = e.target.value;
                    const newIndex = ['Google', 'Bing', 'Yahoo'].indexOf(selectedEngine);
                    handleSliderChange(null, newIndex);
                  }}                
                >
                <FormControlLabel value="Google" control={<Radio />} label="Google" onChange={handleSliderChange}/>
                <FormControlLabel value="Bing" control={<Radio />} label="Bing" onChange={handleSliderChange}/>
                <FormControlLabel value="Yahoo" control={<Radio />} label="Yahoo" onChange={handleSliderChange}/>
                </RadioGroup>
              </FormControl>
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
  