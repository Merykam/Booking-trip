import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './Hotel'
import cityReducer from './city'
import packageReducer from './package'
import userReducer from './user'
import bookingReducer from './booking'


export default configureStore({
    reducer: {
        hotel: hotelReducer,
        city:cityReducer,
        package:packageReducer,
        user:userReducer,
        booking:bookingReducer
    },
})