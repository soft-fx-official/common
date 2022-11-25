import { IBus } from '../tools/bus'
import StepsManager from '../tools/StepsManager'
import { Iconfig } from './app'
import { IInitStorageR } from './storage'

interface IinitWorkStepsArgs {
  isRootApp: boolean
  config: Iconfig
  bus: IBus
  storage: IInitStorageR
}

function initWorkSteps(args: IinitWorkStepsArgs): void {
  const { bus, config, isRootApp, storage } = args
  const { appName, demoAccountStepId, startStepId, steps } = config

  if (isRootApp && steps) {
    let stepManager: StepsManager

    const URLParams = storage.session.main.get('URLParams')

    if (URLParams['DemoAccount']) {
      if (!demoAccountStepId)
        throw new Error(
          `Specify the demoAccountStepId parameter in the ${appName} application configuration`,
        )

      stepManager = new StepsManager(appName, steps, demoAccountStepId)
    } else if (startStepId) {
      stepManager = new StepsManager(appName, steps, startStepId)
    } else {
      stepManager = new StepsManager(appName, steps)
    }

    bus.on('nextStep', args => {
      bus.save('prevStepDirection', () => 'nextStep') // for Redirect component
      stepManager.nextStep(args?.id)
    })

    bus.on('prevStep', () => {
      bus.save('prevStepDirection', () => 'prevStep') // for Redirect component
      stepManager.prevStep()
    })

    bus.on('addModuleSteps', args => {
      if (!args?.moduleName || !args?.steps)
        throw new Error('Required to pass moduleName and steps args')

      stepManager.addModuleSteps(args.moduleName, args.steps)
    })
  }

  if (!isRootApp && steps) {
    bus.say('addModuleSteps', { moduleName: appName, steps })
  }
}

export { initWorkSteps }

export type { IinitWorkStepsArgs }
