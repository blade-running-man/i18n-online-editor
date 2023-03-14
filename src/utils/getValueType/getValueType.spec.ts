import getValueType from './getValueType'

describe('getValueType', () => {
  it('returns the correct type for a string', () => {
    const result = getValueType('hello')
    expect(result).toBe('string')
  })

  it('returns the correct type for a number', () => {
    const result = getValueType(42)
    expect(result).toBe('number')
  })

  it('returns the correct type for an object', () => {
    const result = getValueType({ name: 'John', age: 30 })
    expect(result).toBe('object')
  })

  it('returns the correct type for an array', () => {
    const result = getValueType([1, 2, 3])
    expect(result).toBe('array')
  })

  it('returns the correct type for null', () => {
    const result = getValueType(null)
    expect(result).toBe('object')
  })

  it('returns the correct type for undefined', () => {
    const result = getValueType(undefined)
    expect(result).toBe('undefined')
  })
})
