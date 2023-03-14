import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { editAttributeAction } from '@/store/actions/editorActions'
import TextField from '@/components/atoms/TextField'

interface StringAttributeProps {
  value: string
  attrKey?: string | number
  parent: any
}

const StringAttribute = ({ value, attrKey, parent }: StringAttributeProps) => {
  const [editing, setEditing] = useState(!value)
  const [inputValue, setInputValue] = useState(value)
  const [modified, setModified] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing])

  const setEditMode = () => {
    setEditing(true)
  }

  const setValue = () => {
    if (modified && attrKey !== undefined) {
      dispatch(editAttributeAction({ parent: parent ?? {}, attrInfos: { value: inputValue, attrKey } }))
    }

    setEditing(false)
  }

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setModified(e.target.value !== value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      setValue()
    }
  }

  if (!editing) {
    return <span onClick={setEditMode}>{value}</span>
  }

  return (
    <TextField
      value={inputValue}
      name="attr"
      onChange={updateValue}
      onBlur={setValue}
      ref={inputRef}
      onKeyDown={handleKeyDown}
    />
  )
}

export default StringAttribute
