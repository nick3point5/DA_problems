export function jsonifyClass(clazz: any) {
  return (...args: any[]) => {
    return JSON.parse(JSON.stringify(new clazz(...args)))
  }
}