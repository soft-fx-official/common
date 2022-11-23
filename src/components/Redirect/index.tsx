import React from 'react'

import { IBus } from '../../tools/bus'

type RedirectProps = {
  bus: IBus
  to: 'nextStep' | 'prevStep'
  param?: { id: string }
}

const Redirect = ({ bus, to, param }: RedirectProps) => {
  const prevDirection = bus.get('prevStepDirection')

  if (prevDirection === 'prevStep' && to === 'nextStep') {
    bus.say('prevStep')
  } else if (prevDirection === 'nextStep' && to === 'prevStep') {
    bus.say('nextStep', param)
  } else {
    bus.say(to, param)
  }

  return null
}

export { Redirect }
export type { RedirectProps }
