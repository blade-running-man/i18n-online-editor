import translationReducer from './translationReducer'
import { combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({
  translation: translationReducer,
})

export default reducers
