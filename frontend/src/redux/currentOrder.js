import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        order: [],
        currentProduct: null,
        bar: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.order = action.payload
        },
        setCurrentProducts: (state, action) => {
            state.currentProduct = action.payload
        },
        setBar: (state, action) => {
            state.bar = action.payload
        }
    },
})

export const { setProducts, setCurrentProducts, setBar } = counterSlice.actions

export default counterSlice.reducer