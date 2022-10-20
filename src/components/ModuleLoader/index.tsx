import React, { lazy, memo } from 'react'

import { useDynamicScript } from '../../hooks'
import { IBus, loadDynamicComponent } from '../../tools'
import { ErrorBoundary } from '../ErrorBoundary'

interface IModuleLoader {
  url: string
  scope: string
  module: string
  bus: IBus | null
  onError: (error: any) => void
  onLoad: () => void
  onDone: () => void
}

const ModuleLoader: React.FC<IModuleLoader> = React.memo(
  ({
    url,
    scope,
    module,
    bus,
    onError = console.info,
    onLoad = () => null,
    onDone = () => null,
  }) => {
    const { ready, failed } = useDynamicScript(url)

    if (!url || !scope || !module) {
      onError('Not system specified')
      return null
    }

    if (failed) {
      onError(`Failed to load dynamic script: ${url}`)
      return null
    }

    if (!ready) {
      onLoad()
      return null
    }

    const Component = lazy(loadDynamicComponent(scope, module))

    const Fallback = memo(() => {
      onLoad()
      return null
    })
    onDone()

    return (
      <ErrorBoundary onError={onError}>
        <React.Suspense fallback={<Fallback />}>
          <Component
            bus={bus}
            params={{
              isLoader: false,
              onLoad,
              onError,
              onDone,
            }}
          />
        </React.Suspense>
      </ErrorBoundary>
    )
  },
)

export { ModuleLoader }
export type { IModuleLoader }
