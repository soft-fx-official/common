// NOTE: Class

type TRouteData = { [name: string]: { [name: string]: string[] } }

const buildRoute = (apps: TRouteData) => {
  let data: string = ''
  Object.keys(apps)
    .sort()
    .forEach(app => {
      Object.keys(apps[app])
        .sort()
        .forEach(key => {
          apps[app][key].sort().forEach(value => {
            data = `${app}:${key}:${value};${data}`
          })
        })
    })
  return data
}

const parseRoute = (route: string): TRouteData => {
  const data: TRouteData = {}
  const apps = route.split(';')
  apps.forEach(params => {
    const [app, key, value] = params
      .replace('#', '')
      .split(':')
      .filter(item => !!item)

    if (!app || !key || !value) return

    if (!data[app]) data[app] = {}
    if (!data[app][key]) data[app][key] = []

    data[app][key].push(value)
  })
  return data
}

interface IUpdateRoute {
  app: string
  key: string
  values: string[]
}

const updateRoute = ({ app, key, values }: IUpdateRoute, isReset: boolean = false): void => {
  let route: TRouteData

  if (isReset) {
    route = { [app]: { [key]: values } }
  } else {
    const apps: TRouteData = parseRoute(window.location.hash)
    if (!apps[app]) apps[app] = {}
    apps[app][key] = values
    route = apps
  }

  window.location.hash = buildRoute(route)
}

interface IRemoveRoute {
  app: string
}

const removeRoute = ({ app }: IRemoveRoute) => {
  const apps: TRouteData = parseRoute(window.location.hash)
  delete apps[app]
  window.location.hash = buildRoute(apps)
}

export { parseRoute, removeRoute, updateRoute }
export type { IRemoveRoute, IUpdateRoute, TRouteData }
