export class regex {
  static numregex = () => {
    return /^\-*[\d]{1,}$/;
  };
  static tokenreg = () => {
    return /^\b\w{30}\b$/;
  };
  static jsonreg = () => {
    return /^\{.*\}$/;
    // /\{.*\:\{.*\:.*\}\}/
  };
  static urlreg = () => {
    return /^(\w+?:\/\/)*(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  };
  static urlreg_ = () => {
    return /(\w+?:\/\/)*(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g;
  };
  static extraSpaceRegex = () => {
    return /(^\s|\s$|\s{2,})/g;
  };
  static twitch = class {
    static message = class {
      static action = () => {
        return /^\u0001ACTION (.*)\u0001$/;
      };
    };
    static usernamereg = () => {
      return /^\w{1,32}$/;
    };
    static tokenreg = () => {
      return /^\w{30}$/;
    };
  };
}
