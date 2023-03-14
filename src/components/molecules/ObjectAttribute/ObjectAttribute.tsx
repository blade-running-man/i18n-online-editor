import { useState } from 'react'
import Attribute from '@/components/molecules/Attribute'
import AttributeCreator from '@/components/molecules/AttributeCreator'

import * as styles from './ObjectAttribute.css'

interface ObjectAttributeProps {
  value: Record<string, unknown>
}

const ObjectAttribute = ({ value }: ObjectAttributeProps) => {
  const [editing, setEditing] = useState(false)
  const toggleEditing = () => setEditing(prevEditing => !prevEditing)

  const keys = Object.keys(value)

  const attrs = Object.entries(value).map(([attr, val]) => (
    <Attribute parent={value} value={val} key={attr} attrKey={attr} />
  ))

  return (
    <div>
      <span onClick={toggleEditing} className={styles.hashToggle}>
        Object [{keys.length}]
      </span>
      {editing && (
        <div className={styles.container}>
          {attrs}
          <AttributeCreator type="attribute" parent={value} />
        </div>
      )}
    </div>
  )
}

export default ObjectAttribute
