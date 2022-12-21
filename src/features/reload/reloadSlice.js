import { createSlice } from "@reduxjs/toolkit";

export const reloadSlice = createSlice({
    name: 'reload',
    initialState: {reloadState: false},
    reducers: {
        setReload: (state, action) => {
            state.reloadState = !state.reloadState;
        }
    }
})

export const {setReload} = reloadSlice.actions
export default reloadSlice.reducer