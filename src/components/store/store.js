import { configureStore } from '@reduxjs/toolkit'
import resultsApiSliceReducer from './resultsApiSlice'


export const store = configureStore({
  reducer: {results:resultsApiSliceReducer},
})

