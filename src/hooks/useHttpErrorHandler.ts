import { useCallback } from 'react'

const VALIDATE_ERROR_CODE = 'VALIDATION_FAILED'

type UseHttpErrorHandlerProps = {
  errorKey?: 'target' | 'code'
  modelFieldDictionary?: Record<string, string>
}

const useHttpErrorHandler = ({
  errorKey = 'target',
  modelFieldDictionary = {},
}: UseHttpErrorHandlerProps) =>
  useCallback(
    (error: any, setError: (errors: Record<string, string>) => void) => {
      if (error?.error?.error) {
        if (error.error.error.code === VALIDATE_ERROR_CODE) {
          const errors = error.error.error.innerErrors.reduce(
            (acc: Record<string, string>, cError: any) => {
              const fieldName = modelFieldDictionary[cError[errorKey]]
              if (!fieldName) return acc
              return {
                ...acc,
                [fieldName]: [cError.message, cError[errorKey]],
              }
            },
            {},
          )
          setError(errors)
        }
      }
    },
    [errorKey, modelFieldDictionary],
  )

export { useHttpErrorHandler }
