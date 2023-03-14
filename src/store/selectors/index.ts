import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/state'

export const getTranslationData = (state: RootState) => state.translation.translationData

export const getTranslationKeys = createSelector(getTranslationData, data => {
  return Object.keys(data) ?? []
})
