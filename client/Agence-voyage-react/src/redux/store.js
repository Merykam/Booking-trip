import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './Hotel'
import cityReducer from './city'
import packageReducer from './package'
import userReducer from './user'

export default configureStore({
    reducer: {
        hotel: hotelReducer,
        city:cityReducer,
        package:packageReducer,
        user:userReducer
    },
})