import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useForm, FieldValues } from 'react-hook-form'
import { createAttributeAction } from '@/store/actions/editorActions'
import Button from '@/components/atoms/Button'
import SelectField from '@/components/atoms/SelectField'
import TextField from '@/components/atoms/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as styles from './AttributeCreator.css'

interface AttributeCreatorProps {
  attrKey?: string | number
  type: string
  parent: string | unknown
}

const formSchema = yup.object().shape({
  stateType: yup.string().oneOf(['string', 'array', 'object']).required(),
  stateAttrkey: yup.string(),
})

const AttributeCreator = ({ attrKey, type, parent }: AttributeCreatorProps) => {
  const { t } = useTranslation()
  const [creating, setCreating] = useState(false)

  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = ({ stateType, stateAttrkey }: FieldValues) => {
    setCreating(false)
    const attrInfos = { type: stateType, attrKey: stateAttrkey ?? attrKey ?? '' }
    dispatch(createAttributeAction({ parent, attrInfos }))
    reset()
  }

  const handleCreate = () => {
    setCreating(true)
  }

  const handleCancel = () => {
    reset()
    setCreating(false)
  }

  if (!creating) return <span onClick={handleCreate}>+ Add {type}</span>

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {attrKey !== undefined ? (
        <span>{attrKey}:</span>
      ) : (
        <TextField type="text" {...register('stateAttrkey', { required: true })} />
      )}
      <SelectField {...register('stateType', { required: true })}>
        <option value="string">String</option>
        <option value="array">List</option>
        <option value="object">Map</option>
      </SelectField>
      <Button type="submit">{t('AttributeCreator.ok', 'OK')}</Button>
      <Button onClick={handleCancel} variant="caution">
        {t('AttributeCreator.cancel', 'Cancel')}
      </Button>
    </form>
  )
}

export default AttributeCreator
