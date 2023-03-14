import { JSONObject } from './common'

export interface TranslationState {
  translationData: JSONObject
  loading: boolean
}

export interface RootState {
  translation: TranslationState
}
