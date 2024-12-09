import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { brandFilterProducts } from "../../redux/actions/filter/filterSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//--------------------------------------------------------------------------------------------

const MyDropDown1 = () => {
//--------------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  //--------------------------------------------------------------------------------------------
  //Selectors :
  const brand = useSelector((state) => state.filter.brand);
  //--------------------------------------------------------------------------------------------
  //Function to filter products based on brand :
  const handleChange = (e) => {
    dispatch(brandFilterProducts(e.target.value));
  };
  //--------------------------------------------------------------------------------------------
  return (
    <>
      <Box sx={{ minWidth: 120 }} marginBottom={"1rem"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            label="Brand"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="iphone">Iphone</MenuItem>
            <MenuItem value="samsung">Samsung</MenuItem>
            <MenuItem value="xiaomi">Xiaomi</MenuItem>
            <MenuItem value="hp">HP</MenuItem>
            <MenuItem value="lenovo">Lenovo</MenuItem>
            <MenuItem value="apple">Apple</MenuItem>
            <MenuItem value="intell">Intell</MenuItem>
            <MenuItem value="nvidia">Nvidia</MenuItem>
            <MenuItem value="vogati">Vogati</MenuItem>
            <MenuItem value="nova">Nova</MenuItem>
            <MenuItem value="lg">LG</MenuItem>
            <MenuItem value="adidas">Adidas</MenuItem>
            <MenuItem value="puma">Puma</MenuItem>
            <MenuItem value="nike">Nike</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default MyDropDown1;
