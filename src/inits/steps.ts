import { IStep } from '../models/Step'
import { IBus } from '../tools/bus'
import StepsManager from '../tools/StepsManager'

interface IinitWorkStepsArgs {
  isRootApp: boolean
  appName: string
  steps?: IStep[]
  bus: IBus
}

function initWorkSteps({ isRootApp, appName, steps, bus }: IinitWorkStepsArgs): void {
  if (isRootApp && steps) {
    const stepManager = new StepsManager(appName, steps)

    bus.on('nextStep', args => {
      stepManager.nextStep(args?.id)
    })
    bus.on('prevStep', () => stepManager.prevStep())
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
