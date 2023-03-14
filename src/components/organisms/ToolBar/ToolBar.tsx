import GetTranslationsForm from '@/components/molecules/GetTranslationsForm'
import ResetButton from '@/components/molecules/ResetButton'
import * as styles from './ToolBar.css'
import ExportButton from '@/components/molecules/ExportButton/ExportButton'

const ToolBar = () => {
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBarRight}>
        <GetTranslationsForm />
      </div>
      <div className={styles.toolBarLeft}>
        <ExportButton />
        <ResetButton />
      </div>
    </div>
  )
}

export default ToolBar
