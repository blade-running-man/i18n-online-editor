import ToolBar from '@/components/organisms/ToolBar'
import Editor from '@/components/organisms/Editor'
import * as styles from './RootPage.css'
const RootPage = () => {
  return (
    <div>
      <div className={styles.sideBar}>
        <ToolBar />
      </div>

      <div className={styles.container}>
        <Editor />
      </div>
    </div>
  )
}

export default RootPage
