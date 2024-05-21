import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Cars",
        year: "Year",
        model: "Model",
        make: "Make"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseMake: (state, action) => { state.make = action.payload }
    }   
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseYear, chooseModel, chooseMake } = rootSlice.actions