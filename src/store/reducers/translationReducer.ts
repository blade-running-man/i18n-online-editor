import { createReducer } from '@reduxjs/toolkit'
import {
  createAttributeAction,
  createAttributeActionSuccess,
  editAttributeAction,
  editAttributeActionSuccess,
  removeAttributeAction,
  removeAttributeActionSuccess,
} from '../actions/editorActions'
import {
  clearTranslationData,
  setTranslationData,
  setTranslationDataFailure,
  setTranslationDataSuccess,
} from '../actions/translationActions'

import { TranslationState } from '@/types/state'
export const initialState: TranslationState = {
  translationData: {},
  loading: false,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(setTranslationData, state => {
      state.loading = true
    })
    .addCase(setTranslationDataSuccess, (state, action) => {
      state.loading = false
      state.translationData = action.payload
    })
    .addCase(setTranslationDataFailure, state => {
      state.loading = false
    })
    .addCase(createAttributeAction, state => {
      state.loading = true
    })
    .addCase(createAttributeActionSuccess, (state, action) => {
      state.translationData = action.payload
      state.loading = false
    })
    .addCase(editAttributeAction, state => {
      state.loading = true
    })
    .addCase(editAttributeActionSuccess, (state, action) => {
      state.loading = true
      state.translationData = action.payload
    })
    .addCase(removeAttributeAction, state => {
      state.loading = true
    })
    .addCase(removeAttributeActionSuccess, (state, action) => {
      state.loading = false
      state.translationData = action.payload
    })
    .addCase(clearTranslationData, state => {
      state.translationData = {}
    }),
)
