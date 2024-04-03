import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import request from '../../helpers/request'
const INIT_STATE = {
    status: 'loading',
    //loading: true,
    //list: DATA_MOCKUP,
    list: []
}

const nextId = (list) => list[list.length - 1].id + 1

const productSlice = createSlice({
    name: 'products',
    initialState: INIT_STATE,
    reducers: {
        setList(state, action) {
            state.list = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        updateProduct(state, action) {
            state.list.forEach(item => {
                if (item.id === action.payload.id) {
                    Object.assign(item, action.payload)
                }
            });
            // const { payload } = action
            // state.list.find(item => item.id === action.payload.id)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProductsThunk.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.list = action.payload
                state.status = 'success'
            })
            .addCase(fetchProductsThunk.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(addProductThunk.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(updateProductThunk.fulfilled, (state, action) => {
                // state.list.forEach(item => {
                //     if (item.id === action.payload.id) {
                //         Object.assign(item, action.payload)
                //     }
                // });

                const { payload } = action
                const target = state.list.find(item => item.id === payload.id)

                if (target) {
                    Object.assign(target, action.payload)
                }
            })

    }
})


export const fetchProductsThunk = createAsyncThunk(
    'products/fetch',
    async (name = '', thunkAPI) => {
        const response = await request(
            '/products',
            {
                query: { name, }
            },
            thunkAPI
        )

        if (response.ok) {
            const { data: { products } } = await response.json()
            return products
        }

        return thunkAPI.rejectWithValue('Can not fetch data')
    }
)


export const addProductThunk = createAsyncThunk(
    'products/add',
    async (data, thunkAPI) => {
        const response = await request(
            '/products',
            {
                method: 'POST',
                body: data
            },
            thunkAPI
        )
        if (response.ok) {
            const { data: { product } } = await response.json()
            return product
        }

        return thunkAPI.rejectWithValue('Can not fetch data')
    }
)

export const updateProductThunk = createAsyncThunk(
    'products/update',
    async (data, thunkAPI) => {
        const response = await request(
            `/products/${data.id}`,
            {
                method: 'PATCH',
                body: data
            },
            thunkAPI
        )
        if (response.ok) {
            const { data: { product } } = await response.json()
            return product
        }

        return thunkAPI.rejectWithValue('Can not save')
    }
)



export const {
    setList,
} = productSlice.actions

export default productSlice.reducer;
