import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Inter } from "next/font/google";
import InputBase from '@mui/material/InputBase';

const inter = Inter({ subsets: ["latin"] });

const CustomSelect = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: "#414141",
    fontSize: 24,
    padding: '14px 26px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: inter,
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    color: "rgba(230, 230, 230, 0.90)",
    '&:focus': {
      borderColor: 'rgba(15, 15, 15, 0.50)',
    },
  },
}));

export default function BasicSelect({ handleOnChange, selectedValue, data, label }) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          sx={{ 
            color: "rgba(179, 179, 179, 0.7)",
            '&.Mui-focused': {
              color: "rgba(179, 179, 179, 0.7)",
            }}} 
          id="select-label" >
            {label}
          </InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={label}
          onChange={handleOnChange}
          input={<CustomSelect />}
        >
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            )
          })}
          
        </Select>
      </FormControl>
    </Box>
  );
}