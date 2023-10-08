export function renameKey(
  o: Record<string, any>,
  oldName: string,
  newName: string
) {
  if (!o || !oldName || !newName) return undefined;

  o[newName] = o[oldName];
  delete o[oldName];
  return o;
}
