import Button from '@/components/atoms/Button'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { clearTranslationData } from '@/store/actions/translationActions'

const ResetButton = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(clearTranslationData())
  }

  return (
    <Button onClick={onClickHandler} variant="caution">
      {t('ResetButton.button', 'Reset')}
    </Button>
  )
}
export default ResetButton
