import { createSlice } from "@reduxjs/toolkit"

export const toolKitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        productList: []
    },
    reducers: {
        setNameRedux(state, action) {
            state.productList = action.payload

        }
    }
})
export default toolKitSlice.reducer
export const { setNameRedux } = toolKitSlice.actions
export const userAuthRedux = (state) => state.toolkit.productList;