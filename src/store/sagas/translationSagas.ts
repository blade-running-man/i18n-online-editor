import { all, put, takeLatest, select } from 'redux-saga/effects'

import { TranslationActionType } from '@/store/actions/translationActions'
import {
  EditorActionType,
  createAttributeActionSuccess,
  editAttributeActionSuccess,
  removeAttributeActionSuccess,
} from '@/store/actions/editorActions'
import { setTranslationDataSuccess } from '@/store/actions/translationActions'

export function* setTranslationSaga({ payload }: ReturnType<typeof setTranslationDataSuccess>) {
  yield put(setTranslationDataSuccess(payload))
}

export function* createAttributeSaga({ payload }: ReturnType<typeof setTranslationDataSuccess>) {
  const {
    parent,
    attrInfos: { type, attrKey },
  } = payload

  const translationData = yield select(state => state.translation.translationData)
  const typeDefaultValues = {
    string: '',
    object: {},
    array: [],
  }

  const value = typeDefaultValues[type]
  const newTranslationJson = { ...translationData }

  const key = Object.keys(newTranslationJson).filter(i => newTranslationJson[i] === parent)
  let newParent
  if (typeof key[0] !== 'undefined') {
    if (parent.constructor === Array) {
      newParent = [...parent]
      newParent[attrKey] = value
      yield put(createAttributeActionSuccess({ ...newTranslationJson, [key]: newParent }))
    } else {
      yield put(createAttributeActionSuccess({ ...newTranslationJson, [key]: { ...parent, [attrKey]: value } }))
    }
  } else {
    yield put(createAttributeActionSuccess({ ...newTranslationJson, [attrKey]: value }))
  }
}

export function* editAttributeSaga({ payload }: ReturnType<typeof setTranslationDataSuccess>) {
  const {
    parent,
    attrInfos: { attrKey, value },
  } = payload
  const translationData = yield select(state => state.translation.translationData)
  const newTranslationJson = { ...translationData }
  const key = Object.keys(newTranslationJson).filter(i => newTranslationJson[i] === parent)
  if (typeof key[0] !== 'undefined') {
    if (parent.constructor === Array) {
      const newParent = [...parent]
      newParent[attrKey] = value

      yield put(editAttributeActionSuccess({ ...newTranslationJson, [key]: newParent }))
    } else {
      yield put(editAttributeActionSuccess({ ...newTranslationJson, [key]: { ...parent, [attrKey]: value } }))
    }
  } else {
    yield put(editAttributeActionSuccess({ ...newTranslationJson, [attrKey]: value }))
  }
}

export function* removeAttributeSaga({ payload }: ReturnType<typeof setTranslationDataSuccess>) {
  const { parent, attrKey } = payload

  const translationData = yield select(state => state.translation.translationData)

  const newTranslationJson = { ...translationData }
  const [key] = Object.entries(newTranslationJson).find(([key, value]) => value === parent) || []
  let newParent
  if (Array.isArray(parent)) {
    newParent = [...parent]
    newParent.splice(attrKey, 1)
  } else {
    newParent = { ...parent }
    delete newParent[attrKey]
  }

  yield put(removeAttributeActionSuccess(key ? { ...newTranslationJson, [key]: newParent } : { ...newParent }))
}

export default function* root() {
  yield all([
    takeLatest(TranslationActionType.SET_TRANSLATION_DATA, setTranslationSaga),
    takeLatest(EditorActionType.CREATE_ATTRIBUTE, createAttributeSaga),
    takeLatest(EditorActionType.EDIT_ATTRIBUTE, editAttributeSaga),
    takeLatest(EditorActionType.REMOVE_ATTRIBUTE, removeAttributeSaga),
  ])
}
