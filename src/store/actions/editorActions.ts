import { createAction } from '@reduxjs/toolkit'
import { JSONObject } from '@/types/common'

export const EditorActionType = {
  CREATE_ATTRIBUTE: 'action/CREATE_ATTRIBUTE',
  CREATE_ATTRIBUTE_SUCCESS: 'action/CREATE_ATTRIBUTE_SUCCESS',
  EDIT_ATTRIBUTE: 'action/EDIT_ATTRIBUTE',
  EDIT_ATTRIBUTE_SUCCESS: 'action/EDIT_ATTRIBUTE_SUCCESS',
  REMOVE_ATTRIBUTE: 'action/REMOVE_ATTRIBUTE',
  REMOVE_ATTRIBUTE_SUCCESS: 'action/REMOVE_ATTRIBUTE_SUCCESS',
} as const

export const createAttributeAction = createAction<{
  parent: unknown | (string | number)[]
  attrInfos: { type: string; attrKey: string }
}>(EditorActionType.CREATE_ATTRIBUTE)

export const createAttributeActionSuccess = createAction<JSONObject>(EditorActionType.CREATE_ATTRIBUTE_SUCCESS)

export const editAttributeAction = createAction<{
  parent: unknown | (string | number)[]
  attrInfos: { value: string; attrKey: string | number }
}>(EditorActionType.EDIT_ATTRIBUTE)

export const editAttributeActionSuccess = createAction<JSONObject>(EditorActionType.EDIT_ATTRIBUTE_SUCCESS)

export const removeAttributeAction = createAction<{ parent: unknown; attrKey: string | number }>(
  EditorActionType.REMOVE_ATTRIBUTE,
)

export const removeAttributeActionSuccess = createAction<JSONObject>(EditorActionType.REMOVE_ATTRIBUTE_SUCCESS)
