import {
  addKeysToObject,
  convertToArray,
  extendedTypeof,
  getKeyArraysFromObject,
  getKeyFromObject,
  recreate,
} from ".";

export function addAppendKeysToObject(
  object: Record<string, any>,
  keys: string | string[],
  value: any
): Record<string, any> {
  let object_ = recreate(object);
  let keys_ = convertToArray(keys, false);

  let oldvalue = getKeyFromObject(object_, keys_);
  let newvalue = oldvalue ?? value;
  switch (extendedTypeof(oldvalue)) {
    case "json": {
      let jsonpaths = getKeyArraysFromObject(value);
      jsonpaths.forEach((a) => {
        addKeysToObject(newvalue, a.path, a.value);
      });

      break;
    }

    case "array": {
      newvalue.push(...convertToArray(value, false));
      break;
    }

    case "string":
    case "number":
    case "bigint": {
      newvalue += value;
      break;
    }
  }

  addKeysToObject(object_, keys_, newvalue);

  return object_;
}
