export interface IStep {
  id: string
  name: string
  nextSteps: string[]
  prevStep: string | null
}

export class Step implements IStep {
  id: string
  name: string
  nextSteps: string[]
  prevStep: string | null

  constructor(id: string, name: string, nextSteps: string[], prevStep: string | null = null) {
    this.id = id
    this.name = name
    this.nextSteps = nextSteps
    this.prevStep = prevStep
  }
}
