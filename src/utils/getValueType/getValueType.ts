const getValueType = (val: unknown): 'object' | 'array' | string => {
  const type = typeof val
  return type !== 'object' ? type : val instanceof Array ? 'array' : 'object'
}

export default getValueType
