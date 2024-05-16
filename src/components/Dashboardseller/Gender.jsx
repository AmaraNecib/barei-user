import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Gender() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" 
            className="font-semibold text-lg text-gray-700 pb-1"> 
        الجنس
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className=" rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-64">
          <FormControlLabel value="female" control={<Radio />} label="أنثى" />
          <FormControlLabel value="male" control={<Radio />} label="ذكر" />
        </div>
      </RadioGroup>
    </FormControl>
  );
}