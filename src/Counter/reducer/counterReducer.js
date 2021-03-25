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

    decrement: (state = initialState, action) => {
      return { count: state.count - 1 };
    },

    reset: (state = initialState, action) => {
      return { count: 0 };
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
