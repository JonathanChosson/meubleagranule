import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "../Features/data.js"

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
})

export default store
