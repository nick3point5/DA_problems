export function jsonifyFn(fn: any) {
  return (...args: any[]) => {
    return JSON.parse(JSON.stringify(new fn(...args)))
  }
}
