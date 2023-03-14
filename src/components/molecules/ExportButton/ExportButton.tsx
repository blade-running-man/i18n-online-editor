import Button from '@/components/atoms/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getTranslationData } from '@/store/selectors'
import saveJsonToFile from '@/utils/saveJsonToFile'

const ExportButton = () => {
  const { t } = useTranslation()
  const JSON = useSelector(getTranslationData)
  const onClickHandler = () => {
    saveJsonToFile(JSON, 'translations.json')
  }

  return (
    <Button variant="warning" onClick={onClickHandler}>
      {t('ExportButton.button', 'Export')}
    </Button>
  )
}
export default ExportButton
