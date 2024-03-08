import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './Hotel'
import cityReducer from './city'
import packageReducer from './package'

export default configureStore({
    reducer: {
        hotel: hotelReducer,
        city:cityReducer,
        package:packageReducer
    },
})