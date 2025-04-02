export type jsontypetestSimpleMatch =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "null"
  | "undefined";

export type jsontypetestExtendedMatch = {
  type: jsontypetestSimpleMatch;
  optional?: boolean;
} & {
  value: any;
  optional?: boolean;
};

export type jsontypetestReturnType = {
  match: boolean;
  matches: boolean[];
  matchJSON: Record<string, any>;
  matchPercent: number;
};

export function jsontypetest(
  inputJSON: Record<string, any>,
  testJSON: Record<string, jsontypetestSimpleMatch | jsontypetestExtendedMatch>
): jsontypetestReturnType {
  let r: jsontypetestReturnType = {
    match: false,
    matches: [],
    matchJSON: {},
    matchPercent: 0,
  };

  function actualTest(
    obj: Record<string, any>,
    objTest: Record<
      string,
      jsontypetestSimpleMatch | jsontypetestExtendedMatch
    >,
    matchJSON: Record<string, any>
  ) {
    Object.keys(objTest).forEach((key) => {
      if (!matchJSON[key]) matchJSON[key] = {};

      if (typeof objTest[key] === "string") {
        if (objTest[key] === "array") {
          if (Array.isArray(obj[key])) {
            r.matchPercent++;
          }
        } else if (objTest[key] === "object") {
          if (typeof obj[key] === "object") {
            r.matchPercent++;
          }
        } else if (objTest[key] === "null") {
          if (obj[key] === null) {
            r.matchPercent++;
          }
        } else if (objTest[key] === "undefined") {
          if (obj[key] === undefined) {
            r.matchPercent++;
          }
        } else {
          if (typeof obj[key] === objTest[key]) {
            r.matchPercent++;
          }
        }
      } else {
        let match = false;

        if (objTest[key].type) {
          if (objTest[key].type === "array") {
            if (Array.isArray(obj[key])) {
              match = true;
            }
          } else if (objTest[key].type === "object") {
            if (typeof obj[key] === "object") {
              match = true;
            }
          } else if (objTest[key].type === "null") {
            if (obj[key] === null) {
              match = true;
            }
          } else if (objTest[key].type === "undefined") {
            if (obj[key] === undefined) {
              match = true;
            }
          } else {
            if (typeof obj[key] === objTest[key].type) {
              match = true;
            }
          }
        }

        if (objTest[key].value) {
          match = objTest[key].value === obj[key];
        }
      }
    });
  }

  r.matchPercent = 0;

  return r;
}
