import { useDispatch } from 'react-redux'

import Button from '@/components/atoms/Button'

import StringAttribute from '@/components/molecules/StringAttribute'
import ObjectAttribute from '@/components/molecules/ObjectAttribute'
import ArrayAttribute from '@/components/molecules/ArrayAttribute'
import { removeAttributeAction } from '@/store/actions/editorActions'
import getValueType from '@/utils/getValueType'

import * as styles from './Attribute.css'

interface AttributeProps {
  value: unknown
  parent: unknown | (string | number)[]
  attrKey?: string | number
}

const Attribute = ({ value, parent, attrKey = '' }: AttributeProps) => {
  const dispatch = useDispatch()
  const getComponentType = (type: string) => {
    switch (type) {
      case 'array':
        return ArrayAttribute
      case 'object':
        return ObjectAttribute
      default:
        return StringAttribute
    }
  }

  const createAttribute = (val: unknown, parent: unknown, key?: string | number) => {
    const type = getValueType(val)

    let Component = getComponentType(type)
    return <Component value={val} attrKey={key ?? ''} parent={parent} />
  }

  const typeAttribute = createAttribute(value, parent, attrKey)

  const handleRemove = () => {
    dispatch(removeAttributeAction({ parent, attrKey }))
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleRemove} variant="caution">
        ☒
      </Button>
      <span className={styles.attrName}>{attrKey}:</span>
      <span className={styles.attrValue}>{typeAttribute}</span>
    </div>
  )
}

export default Attribute
