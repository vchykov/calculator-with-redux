import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalcState {
    value: string;
}

const initialState: CalcState = {
    value: "0",
};

export const calcSlice = createSlice({
    name: "Screen",
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setScreen } = calcSlice.actions;

export default calcSlice.reducer;
