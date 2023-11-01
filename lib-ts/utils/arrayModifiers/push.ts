export function push(arr: any[], items: any[], maxSize?: number) {
  if (maxSize && arr.length + items.length > maxSize)
    arr.splice(0, arr.length - items.length - maxSize + 2);
  arr.push(...items);
  return arr;
}
