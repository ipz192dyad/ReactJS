import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    array: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUserAction: (state, action) => {
            state.array.push(action.payload);
        },
        addUsersAction: (state, action) => {
            state.array.push(...action.payload);
        },
        removeUserAction: (state, action) => {
            state.array = state.array.filter(user => user.id !== action.payload);
        }
    }
})

export const { addUserAction, addUsersAction, removeUserAction } = usersSlice.actions;
export default usersSlice.reducer;