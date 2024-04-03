import { createSlice } from "@reduxjs/toolkit/dist"

const INIT_STATE = {
    loading: true,
    list: []
}
// const cartReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case 'cart/add':
//             return {
//                 ...state,
//                 list: [...state.list, action.payload]
//             }
//         case 'cart/remove':
//             return {
//                 ...state,
//                 list: state.list.filter(item => item.id !== action.payload)
//             }
//         default:
//             return state
//     }
// }

// export const addCart = (product) => ({
//     type: 'cart/add',
//     payload: product
// })

// export const removeCart = (id) => ({
//     type: 'cart/remove',
//     payload: id
// })


const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        addCart(state, action) {
            state.list.push(action.payload)
        },
        removeCart(state, action) {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
    },

})

export const {
    addCart, removeCart
} = cartSlice.actions

export default cartSlice.reducer;


