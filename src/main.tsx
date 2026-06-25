import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error-boundary/ErrorFallback'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)