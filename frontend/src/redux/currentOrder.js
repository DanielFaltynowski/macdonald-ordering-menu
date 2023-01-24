import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        order: [],
        currentProduct: null,
        bar: false,
        data: null
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
        },
        setCurrentData: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { setProducts, setCurrentProducts, setBar, setCurrentData } = counterSlice.actions

export default counterSlice.reducer