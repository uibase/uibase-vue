export default function replaceGlobalVariables(
  target: any,
  propKey: string,
  desc: any
) {
  const method = desc.value
  desc.value = function() {
    // eslint-disable-next-line prefer-rest-params
    const res = Reflect.apply(method, this, arguments)
    if (res) {
      let resultStr = JSON.stringify(res)
      const variables = {
        ...this.userConfig.global.colors
      }
      Object.keys(variables)
        .sort((a, b) => {
          if (a.length > b.length) {
            return -1
          } else {
            return 1
          }
        })
        .forEach((variable) => {
          const replaceString = new RegExp(`\\$${variable}`, 'gi')
          resultStr = resultStr.replace(replaceString, variables[variable])
        })
      return JSON.parse(resultStr)
    }
  }
}
