import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allProducts: "",
    },
    reducers: {
    
        setSetectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const {
    setSetectedProduct,
} = homeSlice.actions;

export default homeSlice.reducer;
