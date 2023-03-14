import { createAction } from '@reduxjs/toolkit'

import { JSONObject } from '@/types/common'

export const TranslationActionType = {
  SET_TRANSLATION_DATA: 'action/SET_TRANSLATION_DATA',
  SET_TRANSLATION_DATA_SUCCESS: 'action/SET_TRANSLATION_DATA_SUCCESS',
  SET_TRANSLATION_DATA_FAILURE: 'action/SET_TRANSLATION_DATA_FAILURE',
  CLEAR_TRANSLATION_DATA: 'action/CLEAR_TRANSLATION_DATA',
} as const

export const setTranslationData = createAction<JSONObject>(TranslationActionType.SET_TRANSLATION_DATA)

export const setTranslationDataSuccess = createAction<JSONObject>(TranslationActionType.SET_TRANSLATION_DATA_SUCCESS)

export const setTranslationDataFailure = createAction(TranslationActionType.SET_TRANSLATION_DATA_FAILURE)

export const clearTranslationData = createAction(TranslationActionType.CLEAR_TRANSLATION_DATA)
