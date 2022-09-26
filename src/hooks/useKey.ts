import { useEffect, useRef } from 'react'

const useKey = (key: string, cb: (event: EventListener) => void) => {
  const cbRef = useRef(cb)

  useEffect(() => {
    cbRef.current = cb
  })

  useEffect(() => {
    // @ts-ignore
    const handle = event => {
      if (event.code === key) {
        cbRef.current(event)
      }
    }

    document.addEventListener('keypress', handle)
    return () => document.removeEventListener('keypress', handle)
  }, [key])
}

export { useKey }
