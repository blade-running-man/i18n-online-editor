import React, { useState } from 'react'
import Attribute from '@/components/molecules/Attribute'
import AttributeCreator from '@/components/molecules/AttributeCreator'
import * as styles from './ArrayAttribute.css'
interface ArrayAttributeProps {
  value: any[]
}

const ArrayAttribute: React.FC<ArrayAttributeProps> = ({ value }) => {
  const [editing, setEditing] = useState(false)
  const keys = Object.keys(value)

  const toggleEditing = () => {
    setEditing(!editing)
  }

  const attrs = value.map((val, i) => <Attribute parent={value} value={val} key={i} attrKey={i} />)

  const openArray = (
    <div className={styles.attrChildren}>
      {attrs}
      <AttributeCreator type="element" parent={value} attrKey={keys.length} />
    </div>
  )

  const className = editing ? 'open arrayAttr compoundAttr' : 'arrayAttr compoundAttr'

  return (
    <span className={className}>
      <span onClick={toggleEditing} className="hashToggle">
        Array [{keys.length}]
      </span>
      {openArray}
    </span>
  )
}

export default ArrayAttribute
