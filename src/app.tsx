import { ReactElement } from 'react'
import RootPage from '@/components/pages/RootPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store, { persistStorage } from '@/store/storeConfig'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStorage}>
        <RootPage />
      </PersistGate>
    </Provider>
  )
}
export default App
