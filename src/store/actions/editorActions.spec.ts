import { createAttributeAction, editAttributeAction, removeAttributeAction, EditorActionType } from './editorActions'

describe('Editor Actions', () => {
  it('should create a CREATE_ATTRIBUTE action', () => {
    const action = createAttributeAction({
      parent: ['foo', 123],
      attrInfos: { type: 'string', attrKey: 'name' },
    })
    expect(action.type).toBe(EditorActionType.CREATE_ATTRIBUTE)
    expect(action.payload).toEqual({
      parent: ['foo', 123],
      attrInfos: { type: 'string', attrKey: 'name' },
    })
  })

  it('should create an EDIT_ATTRIBUTE action', () => {
    const action = editAttributeAction({
      parent: { name: 'foo' },
      attrInfos: { value: 'bar', attrKey: 'name' },
    })
    expect(action.type).toBe(EditorActionType.EDIT_ATTRIBUTE)
    expect(action.payload).toEqual({
      parent: { name: 'foo' },
      attrInfos: { value: 'bar', attrKey: 'name' },
    })
  })

  it('should create a REMOVE_ATTRIBUTE action', () => {
    const action = removeAttributeAction({ parent: { name: 'foo' }, attrKey: 'name' })
    expect(action.type).toBe(EditorActionType.REMOVE_ATTRIBUTE)
    expect(action.payload).toEqual({ parent: { name: 'foo' }, attrKey: 'name' })
  })
})
