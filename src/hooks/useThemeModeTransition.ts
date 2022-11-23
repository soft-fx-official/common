import { useEffect, useRef, useState } from 'react'

import styles from './useThemeModeTransition.module.css'

type UseThemeModeTransitionProps = {
  isDarkTheme: boolean
}

const useThemeModeTransition = ({ isDarkTheme }: UseThemeModeTransitionProps) => {
  const [mode, setMode] = useState<'dark' | 'light'>(isDarkTheme ? 'dark' : 'light')

  const firstRenderRef = useRef(true)

  const timer = useRef<NodeJS.Timeout | undefined>(undefined)
  useEffect(() => {
    if (firstRenderRef.current) {
      // to prevent first load transition
      firstRenderRef.current = false
      return
    }

    document.body.className = styles.transition

    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => (document.body.className = ''), 2500)

    return () => {
      clearTimeout(timer.current)
    }
  }, [isDarkTheme])

  const modeTimer = useRef<NodeJS.Timeout | undefined>(undefined)
  useEffect(() => {
    if (modeTimer.current) clearTimeout(modeTimer.current)
    modeTimer.current = setTimeout(() => {
      setMode(isDarkTheme ? 'dark' : 'light')
    }, 250)
    return () => {
      clearTimeout(modeTimer.current)
    }
  }, [isDarkTheme])

  return mode
}

export { useThemeModeTransition }
