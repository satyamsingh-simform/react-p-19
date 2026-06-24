import type {FallbackProps} from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }:FallbackProps) => {
  const errMsg=error instanceof Error ? error.message : 'unknown error'
  return (
    <div role="alert">
          <p>Something went wrong:</p>
          <pre>{errMsg}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
  )
}

