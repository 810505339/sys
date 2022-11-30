export function isPC() {
  const userAgentInfo = navigator.userAgent

  const Agents = ['Android', 'iPhone',

    'SymbianOS', 'Windows Phone',

    'iPad', 'iPod']

  let flagPc = true

  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flagPc = false

      break
    }
  }

  return flagPc
}
