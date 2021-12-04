export function sumByProperty<T extends string>(arr: { [K in T]: number }[], key: T): number {
  return arr.reduce((curr, next) => curr + next[key], 0);
}
