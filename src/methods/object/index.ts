export function objectPropertyDeleter<T extends object>(
  properties: (keyof T)[],
  obj: T
) {
  properties.forEach((property) => {
    if (obj[property]) {
      delete obj[property];
    }
  });

  return obj;
}

export function objectPropertyDeleterInArray<T extends object>(
  properties: (keyof T)[],
  obj: T[]
) {
  const newObject = obj.map((newObj) => {
    properties.forEach((property) => {
      if (newObj[property]) {
        delete newObj[property];
      }
    });
    return newObj;
  });

  return newObject;
}
