import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    counter: 20,
    lesson: {
        topic: 'Redux Toolkit'
    }
}
  
const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterAction: (state) => {
            state.counter += 10;
        },
        decreaseCounterAction: (state) => {
            state.counter -= 10;
        }
    }
})

export const { increaseCounterAction, decreaseCounterAction } = counterSlice.actions;
export default counterSlice.reducer;