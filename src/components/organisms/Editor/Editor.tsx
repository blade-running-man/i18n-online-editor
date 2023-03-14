import { useSelector } from 'react-redux'
import { getTranslationData } from '@/store/selectors'
import ObjectAttribute from '@/components/molecules/ObjectAttribute'
import * as styles from '@/components/organisms/Editor/Editor.css'

const Editor = () => {
  const JSON = useSelector(getTranslationData)

  if (JSON == null) {
    return null
  }

  return (
    <div className={styles.container}>
      <ObjectAttribute value={JSON} />
    </div>
  )
}

export default Editor
