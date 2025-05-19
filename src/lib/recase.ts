import pkg from "lodash";

const { camelCase, kebabCase, snakeCase, upperCase, lowerCase, startCase } = pkg;

type KeyValuable =
  | {
      [key: string]: KeyValuable;
    }
  | Array<KeyValuable>;

export const recase = 
  (caser: "camel" | "kebab" | "snake" | "upper" | "lower" | "start") =>
  (obj: KeyValuable): unknown => {
    switch (caser) {
      case "camel" :
        return recaseWithCaser(camelCase, obj)
      case "kebab" :
        return recaseWithCaser(kebabCase, obj)
      case "snake" :
        return recaseWithCaser(snakeCase, obj)
      case "upper" :
        return recaseWithCaser(upperCase, obj)
      case "lower" :
        return recaseWithCaser(lowerCase, obj)
      case "start" :
        return recaseWithCaser(startCase, obj)
    }
  };

type caser = (string?: string) => string;
const recaseWithCaser = (caser: caser, obj: KeyValuable): unknown => {
  if (Array.isArray(obj)) {
    return obj.map((v) => recaseWithCaser(caser, v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [caser(key)]: recaseWithCaser(caser, obj[key])
      }),
      {}
    );
  }
  return obj;
}
