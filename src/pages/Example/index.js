import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Route, Routes, useNavigate } from 'react-router-dom';

const pages = ['/1', '/2', '/3'];

const Example = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   navigate(pages[value]);
  // }, [value]);

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {/* <div>
          <Routes>
            <Route path='/1'>
              <div>item 1</div>
            </Route>
            <Route path='/2'>
              <div>item 2</div>
            </Route>
            <Route path='/3'>
              <div>item 3</div>
            </Route>
          </Routes>
        </div> */}
      </Box>
      {value === 0 && (
        <div>item 1</div>
      )}
      {value === 1 && (
        <div>item 2</div>
      )}
      {value === 2 && (
        <div>item 3</div>
      )}
    </div>
  )
}

export default Example