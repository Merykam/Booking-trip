import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './Hotel'
import cityReducer from './city'

export default configureStore({
    reducer: {
        hotel: hotelReducer,
        city:cityReducer
    },
})