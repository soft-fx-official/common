import React from 'react'

function useTimer(start: number, onStop: () => void, tactMs: number = 1000): number {
  const isInc = start < 0
  const stop = isInc ? 0 : start
  const current = Math.abs(isInc ? start : 0)

  const [count, setCount] = React.useState(current)

  const timerStop = (interval: ReturnType<typeof setInterval>) => {
    clearInterval(interval)
    if (onStop) onStop()
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(currentCount => {
        const currectCount = isInc ? currentCount - 1 : currentCount + 1
        if (currectCount === stop) {
          timerStop(interval)
        }
        return currectCount
      })
    }, tactMs)
    return () => timerStop(interval)
  }, [])

  return count
}

export default useTimer
