type TRouteData = { [name: string]: { [name: string]: string[] } }

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

const updateRoute = ({ app, key, values }: IUpdateRoute): void => {
  const apps: TRouteData = parseRoute(window.location.hash)
  if (!apps[app]) apps[app] = {}
  apps[app][key] = values

  let data: string = ''
  Object.keys(apps).forEach(app => {
    Object.keys(apps[app]).forEach(key => {
      apps[app][key].forEach(value => {
        data = `${app}:${key}:${value};${data}`
      })
    })
  })

  window.location.hash = data
}

export { parseRoute, updateRoute }
export type { IUpdateRoute, TRouteData }
