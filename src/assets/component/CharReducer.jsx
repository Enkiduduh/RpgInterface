import { createSlice } from "@reduxjs/toolkit";
import { charList } from "../data/chars";


const charSlice = createSlice ({
  name: "chars",
  initialState: charList,
  reducers: {

  }
})

export default charSlice.reducer;



