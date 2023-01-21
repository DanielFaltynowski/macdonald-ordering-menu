import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        order: [{id: 1, name: "burger", price: 3.99, amount: 1}, {id: 2, name: "cheseburger", price: 4.99, amount: 2}, {id: 3, name: "coca-cola", price: 1.49, amount: 1}],
        currentProduct: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.order = action.payload
        },
        setCurrentProducts: (state, action) => {
            state.currentProduct = action.payload
        }
    },
})

export const { setProducts, setCurrentProducts } = counterSlice.actions

export default counterSlice.reducer