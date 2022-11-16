import { IStep } from '../models'
import { parseRoute, updateRoute } from './route'

export default class StepsManager {
  rootAppName: string
  rootSteps: IStep[]
  moduleSteps: { [moduleName: string]: IStep[] } = {}
  currentRootStep: IStep
  currentModuleStep: IStep | null = null
  historyModuleStep: { [moduleName: string]: IStep[] } = {}

  constructor(rootAppName: string, rootSteps: IStep[]) {
    this.rootAppName = rootAppName
    this.rootSteps = rootSteps

    const savedHistoryModuleStep = window.sessionStorage.getItem(`${rootAppName}:historyModuleStep`)

    if (savedHistoryModuleStep) {
      this.historyModuleStep = JSON.parse(savedHistoryModuleStep)
    }

    window.addEventListener('hashchange', () => {
      window.sessionStorage.setItem(
        `${rootAppName}:historyModuleStep`,
        JSON.stringify(this.historyModuleStep),
      )
      this.stepCheck()
    })

    this.currentRootStep = this.initRootStep()
  }

  addModuleSteps(moduleName: string, steps: IStep[]): void {
    if (!this.moduleSteps[moduleName]) {
      this.moduleSteps[moduleName] = steps
    }
    this.initModuleStep(moduleName)
  }

  nextStep(id?: string): void {
    if (id) {
      if (this?.currentModuleStep?.nextSteps.includes(id)) {
        this.currentModuleStep = this.getStepById(id, true)
        this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
        return
      }

      if (this.currentRootStep.nextSteps.includes(id)) {
        this.currentRootStep = this.getStepById(id)
        this.updateRoute(this.rootAppName, this.currentRootStep.id)
        return
      }

      throw new Error(`No steps found with this id: ${id}`)
    } else {
      if (
        (this.currentModuleStep && this.currentModuleStep.nextSteps.length > 1) ||
        this.currentRootStep.nextSteps.length > 1
      ) {
        const possibleIds =
          this.currentModuleStep?.nextSteps
            .map(id => {
              const { name } = this.getStepById(id, true)
              return `${id}(${name})`
            })
            .join(', ') ||
          this.currentRootStep.nextSteps
            .map(id => {
              const { name } = this.getStepById(id)
              return `${id}(${name})`
            })
            .join(', ')
        throw new Error(`Id needs to be passed. There are such id: ${possibleIds}.`)
      }
    }

    if (this?.currentModuleStep?.nextSteps[0]) {
      this.pushStepToHistory(this.currentRootStep.name, this.currentModuleStep)
      this.currentModuleStep = this.getStepById(this.currentModuleStep.nextSteps[0], true)
      this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
      return
    }

    if (this.currentRootStep.nextSteps[0]) {
      if (this.currentModuleStep) {
        this.pushStepToHistory(this.currentRootStep.name, this.currentModuleStep)
        this.currentModuleStep = null
      }

      this.currentRootStep = this.getStepById(this.currentRootStep.nextSteps[0])

      this.updateRoute(this.rootAppName, this.currentRootStep.id, true)

      if (this.hasSubSteps(this.currentRootStep)) {
        this.currentModuleStep = this.getStartStep(this.moduleSteps[this.currentRootStep.name])

        this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
      }

      return
    }

    console.warn('No more steps')
  }

  prevStep(): void {
    if (this.currentModuleStep && this.currentModuleStep.prevStep) {
      this.popLastStepHistory(this.currentRootStep.name)

      this.currentModuleStep = this.getStepById(this.currentModuleStep.prevStep, true)

      this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
      return
    }

    if (this.currentRootStep.prevStep) {
      this.currentRootStep = this.getStepById(this.currentRootStep.prevStep)

      this.updateRoute(this.rootAppName, this.currentRootStep.id, true)

      if (this.hasSubSteps(this.currentRootStep)) {
        const prevStepFromHistory = this.popLastStepHistory(this.currentRootStep.name)

        if (prevStepFromHistory) {
          this.currentModuleStep = prevStepFromHistory
        } else {
          this.currentModuleStep = this.getStartStep(this.moduleSteps[this.currentRootStep.name])
        }

        this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
      }
      return
    }

    console.warn('No more steps')
  }

  protected get routeData() {
    return parseRoute(window.location.hash)
  }

  protected updateRoute(appName: string, id: string, reset: boolean = false): void {
    updateRoute(
      {
        app: appName,
        key: 'step',
        values: [id],
      },
      reset,
    )
  }

  protected stepCheck(): void {
    if (this.currentModuleStep) {
      const idFromRoute = this.getStepIdFromRoute(this.currentRootStep.name)
      if (!idFromRoute || idFromRoute !== this.currentModuleStep.id)
        this.updateRoute(this.currentRootStep.name, this.currentModuleStep.id)
    } else {
      const idFromRoute = this.getStepIdFromRoute(this.rootAppName)
      if (!idFromRoute || idFromRoute !== this.currentRootStep.id)
        this.updateRoute(this.rootAppName, this.currentRootStep.id)
    }
  }

  protected getStepIdFromRoute(appName: string): string | null {
    const { routeData } = this

    return routeData?.[appName]?.['step'][0] || null
  }

  protected getStartStep(steps: IStep[]): IStep {
    const startStep = steps.find(step => !step.prevStep)

    if (!startStep) {
      throw new Error('Start step not found')
    }

    return startStep
  }

  protected hasSubSteps(step: IStep): boolean {
    return !!this.moduleSteps[step.name]
  }

  protected getStepById(id: string, isModuleSteps: boolean = false): IStep {
    let step: IStep | undefined

    if (isModuleSteps) {
      step = this.moduleSteps[this.currentRootStep.name].find(step => step.id === id)
    } else {
      step = this.rootSteps.find(step => step.id === id)
    }

    if (!step) {
      throw new Error(
        `Step with this id not found: ${id}. Check the configuration file of the module: ${
          isModuleSteps ? this.currentRootStep.name : this.rootAppName
        }`,
      )
    }

    return step
  }

  protected initRootStep(): IStep {
    const idStepFromRoute = this.getStepIdFromRoute(this.rootAppName)

    if (idStepFromRoute) {
      const stepByRoute = this.rootSteps.find(step => step.id === idStepFromRoute)

      if (stepByRoute) {
        return stepByRoute
      }
    }

    const startStep = this.getStartStep(this.rootSteps)

    this.updateRoute(this.rootAppName, startStep.id, true)

    return startStep
  }

  protected initModuleStep(moduleName: string): void {
    const idStepFromRoute = this.getStepIdFromRoute(moduleName)

    if (idStepFromRoute) {
      const stepByRoute = this.moduleSteps[moduleName].find(step => step.id === idStepFromRoute)

      if (stepByRoute) {
        this.currentModuleStep = stepByRoute
        return
      }
    }

    const startModuleStep = this.getStartStep(this.moduleSteps[moduleName])

    this.currentModuleStep = startModuleStep

    this.updateRoute(moduleName, startModuleStep.id)
  }

  protected popLastStepHistory(moduleName: string): IStep | null {
    if (!this.historyModuleStep[moduleName]) return null

    const step = this.historyModuleStep[moduleName].pop()

    return step ? step : null
  }

  protected pushStepToHistory(moduleName: string, step: IStep): void {
    if (!this.historyModuleStep[moduleName]) this.historyModuleStep[moduleName] = []

    this.historyModuleStep[moduleName].push(step)
  }
}
