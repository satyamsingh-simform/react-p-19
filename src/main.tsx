import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error-boundary/ErrorFallback'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
