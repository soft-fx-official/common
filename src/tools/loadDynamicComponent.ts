// NOTE: ts-ignore
function loadDynamicComponent(scope: string, module: string) {
  return async () => {
    // @ts-ignore
    await __webpack_init_sharing__('default')
    // @ts-ignore
    const container = window[scope]
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default)
    // @ts-ignore
    const factory = await container.get(module)
    const Module = factory()
    return Module
  }
}

export { loadDynamicComponent }
