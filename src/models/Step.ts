export interface IStep {
  id: string
  name: string
  nextSteps: string[]
  prevStep: string | null
}
