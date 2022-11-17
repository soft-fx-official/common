import React from 'react'

import { IBus } from '../../tools/bus'

type RedirectProps = {
  bus: IBus
  to: 'nextStep' | 'prevStep'
  param?: { id: string }
}

const Redirect = ({ bus, to, param }: RedirectProps) => {
  bus.say(to, param)
  return null
}

export { Redirect }
export type { RedirectProps }
