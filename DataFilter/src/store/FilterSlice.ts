import { createSlice } from "@reduxjs/toolkit";

interface FilteredData {
  searchedName: string;
  searchedUsername: string;
  searchedEmail: string;
  searchedPhone: string;
}

const initialState: FilteredData = {
  searchedName: "",
  searchedUsername: "",
  searchedEmail: "",
  searchedPhone: "",
};

const FilteredSlice = createSlice({
  name: "FilteredUser",
  initialState,
  reducers: {
    setFilteredName: (state, action) => {
      state.searchedName = action.payload;
    },
    setFilteredUsername: (state, action) => {
      state.searchedUsername = action.payload;
    },
    setFilteredEmail: (state, action) => {
      state.searchedEmail = action.payload;
    },
    setFilteredPhone: (state, action) => {
      state.searchedPhone = action.payload;
    },
  },
});

export const { setFilteredName } = FilteredSlice.actions;
export const { setFilteredUsername } = FilteredSlice.actions;
export const { setFilteredEmail } = FilteredSlice.actions;
export const { setFilteredPhone } = FilteredSlice.actions;

export default FilteredSlice.reducer;
