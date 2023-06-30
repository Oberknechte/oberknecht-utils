import { recreate } from ".";

type processArgEntry = {
  keys: string[];
  allowArgs?: boolean;
  argsLength?: number;
  args?: string[];
};

type processArgsType = Record<string, processArgEntry>;

export function parseProcessArgs(
  args: typeof process.argv,
  processArgs?: processArgsType
) {
  let processArgs_ = recreate(processArgs ?? {});

  let lastCommand: processArgEntry;
  args.slice(2).map((a) => {
    if (/^\-+\w+$/g.test(a)) {
      const b = a.replace(/^\-+/, "");
      const c = Object.keys(processArgs_).filter((a) =>
        processArgs_[a].keys.includes(b)
      )?.[0];

      if (!c) return (lastCommand = undefined);
      
      let d = processArgs_[c];
      d.args = [];
      lastCommand = d;
    } else if (
      lastCommand &&
      lastCommand.allowArgs &&
      (!lastCommand.allowArgs ||
        !lastCommand.argsLength ||
        lastCommand.args.length < lastCommand.argsLength)
    ) {
      lastCommand.args.push(a);
    }
  });

  return processArgs_;
}
