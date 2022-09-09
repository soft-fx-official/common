import React from 'react'

interface IUseDynamicScriptR {
  ready: boolean
  failed: boolean
}

const useDynamicScript = (url: string): IUseDynamicScriptR => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!url) return

    const element = document.createElement('script')

    element.src = url
    element.type = 'text/javascript'
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      console.info(`[DYNAMIC SCRIPT][LOAD]: ${url}`)
      setReady(true)
    }

    element.onerror = () => {
      console.info(`[DYNAMIC SCRIPT][ERROR]: ${url}`)
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      console.info(`[DYNAMIC SCRIPT][REMOVED]: ${url}`)
      document.head.removeChild(element)
    }
  }, [url])

  return { ready, failed }
}

export { useDynamicScript }
