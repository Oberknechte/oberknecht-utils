import { regexGeneratorOptions } from "../types/regexGenerator";

export function regexGenerator(options: regexGeneratorOptions) {
  let options_ = options ?? {};
  options_.charGroupReplacement =
    options.charGroupReplacement ?? "([$asd$][W]*?)";
}
