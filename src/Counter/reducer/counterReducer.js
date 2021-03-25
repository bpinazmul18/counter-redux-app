const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state = initialState, action) => {
      return { count: state.count + 1 };
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
