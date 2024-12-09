import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortProducts } from "../../redux/actions/filter/filterSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sortType);
  const handleChange = (event) => {
    const selectedSort = event.target.value;
    dispatch(sortProducts(selectedSort));
  };
  return (
    <>
      <Box sx={{ minWidth: 120 }} marginBottom={"1rem"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value="minPrice">Min-price</MenuItem>
            <MenuItem value="maxPrice">MaxPrice</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SortDropdown;
