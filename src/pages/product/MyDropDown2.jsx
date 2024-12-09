import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoryFilterProducts } from "../../redux/actions/filter/filterSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//--------------------------------------------------------------------------------------------
const MyDropDown2 = () => {
  const dispatch = useDispatch();
  //--------------------------------------------------------------------------------------------
  //Selectors :
  const selectedCategory = useSelector((state) => state.filter.category);
  //--------------------------------------------------------------------------------------------
  //Function to filter products based on category : 
  const handleChange = (event) => {
    const newCategory = event.target.value;
    dispatch(categoryFilterProducts(newCategory));
  };
  //--------------------------------------------------------------------------------------------
  return (
    <>
      <Box sx={{ minWidth: 120 }} marginBottom={"1rem"} >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="cellphone">Cellphone</MenuItem>
            <MenuItem value="mobile-accessory">M-accessory</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
            <MenuItem value="laptop-accessory">Laptop-accessory</MenuItem>
            <MenuItem value="pc-accessory">Pc-accessory</MenuItem>
            <MenuItem value="pot">Pot</MenuItem>
            <MenuItem value="coffee">Coffee</MenuItem>
            <MenuItem value="iron">Iron</MenuItem>
            <MenuItem value="refrigerator">Refrigerator</MenuItem>
            <MenuItem value="t-shirt">T-shirt</MenuItem>
            <MenuItem value="shoes">Shoes</MenuItem>
            <MenuItem value="pencils">Pencils</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default MyDropDown2;
