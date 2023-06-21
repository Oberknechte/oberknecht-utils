export class regex {
  static numregex = () => {
    return new RegExp(`^([\\d]{1,})$`, "g");
  };
  static tokenreg = () => {
    return new RegExp(`^\\b[\\w]{30}\\b$`, "g");
  };
  static jsonreg = () => {
    return new RegExp(`^\\{+[\\W\\w]*\\}$`, "g");
  };
  static urlreg = () => {
    return new RegExp(
      `(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})`,
      "g"
    );
  };
  static extraSpaceRegex = () => {
    return new RegExp(`(^\\s|\\s$|\\s{2,})`, "g");
  };
  static twitch = class {
    static message = class {
      static action = () => {
        return /^\u0001ACTION (.*)\u0001$/;
      };
    };
    static usernamereg = () => {
      return new RegExp(`\\b^[\\w]{1,32}$\\b`, "g");
    };
  };
}
