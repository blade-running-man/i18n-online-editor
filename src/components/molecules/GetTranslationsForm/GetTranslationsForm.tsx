import { useDispatch } from 'react-redux'
import { useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import fetchJSONFromURL from '@/utils/fetchJSONFromURL'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import { setTranslationData } from '@/store/actions/translationActions'

import TextField from '@/components/atoms/TextField'
import Button from '@/components/atoms/Button'

import * as styles from './GetTranslationsForm.css'
import ErrorMessage from '@/components/atoms/ErrorMessage'

const formSchema = yup.object().shape({
  url: yup.string().required().url(),
})

const GetTranslationsForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = async ({ url }: FieldValues) => {
    try {
      const data = await fetchJSONFromURL(url)

      dispatch(setTranslationData(data))
    } catch (error) {
      setError('url', { type: 'invalidUrl', message: `${t('GetTranslationsForm.errors.invalidUrl', 'Invalid URL')}` })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <TextField {...register('url', { required: true })} />
        {errors.url && <ErrorMessage>{`${errors.url.message}`}</ErrorMessage>}
      </div>

      <Button disabled={isSubmitting}>{t('GetTranslationsForm.button', 'Set Data')}</Button>
    </form>
  )
}
export default GetTranslationsForm
