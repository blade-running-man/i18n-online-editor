import {
  TranslationActionType,
  setTranslationData,
  setTranslationDataSuccess,
  setTranslationDataFailure,
} from './translationActions'

describe('my-actions', () => {
  it('should create an action to set translation data', () => {
    const expectedAction = {
      type: TranslationActionType.SET_TRANSLATION_DATA,
      payload: {
        key1: 'value1',
        key2: 'value2',
      },
    }
    expect(setTranslationData({ key1: 'value1', key2: 'value2' })).toEqual(expectedAction)
  })

  it('should create an action to set translation data success', () => {
    const expectedAction = {
      type: TranslationActionType.SET_TRANSLATION_DATA_SUCCESS,
      payload: {
        key1: 'value1',
        key2: 'value2',
      },
    }
    expect(setTranslationDataSuccess({ key1: 'value1', key2: 'value2' })).toEqual(expectedAction)
  })

  it('should create an action to set translation data failure', () => {
    const expectedAction = {
      type: TranslationActionType.SET_TRANSLATION_DATA_FAILURE,
    }
    expect(setTranslationDataFailure()).toEqual(expectedAction)
  })
})
