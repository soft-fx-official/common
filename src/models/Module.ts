export interface IModule {
  url: string
  name: string
  module: string
}
export class Module implements IModule {
  url: string
  name: string
  module: string

  constructor(url: string, name: string, module: string) {
    this.url = url
    this.name = name
    this.module = module
  }
}
