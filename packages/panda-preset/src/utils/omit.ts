type UnknownRecord = Record<PropertyKey, unknown>;

const isObject = (input: unknown): input is UnknownRecord =>
  typeof input === "object" && !!input && !Array.isArray(input);

type Dot<T extends string, U extends string> = "" extends U ? T : `${T}.${U}`;

type Paths<T> = T extends string
  ? ""
  : {
      [K in Extract<keyof T, string>]: Dot<`${K}`, Paths<T[K]>>;
    }[Extract<keyof T, string>];

export function omit<T extends UnknownRecord, U extends keyof T | Paths<T>>(object: T, keys: U[]) {
  const omit = { ...object };

  keys.forEach((key) => {
    if (Object.hasOwn(omit, key)) {
      delete omit[key];
    } else if (typeof key === "string") {
      let currentObject: UnknownRecord = omit;
      const parts = key.split(".");

      parts.forEach((part) => {
        if (Object.hasOwn(currentObject, part)) {
          const next = currentObject[part];

          if (part === parts.at(-1)) {
            delete currentObject[part];
          } else if (isObject(next)) {
            currentObject = next;
          }
        }
      });
    }
  });

  return omit as Omit<T, U>;
}
