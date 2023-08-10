import { reverse } from "./reverse";

export function reverseInWords(s: string): string {
  return s
    ?.split(" ")
    ?.map((a) => reverse(a))
    ?.join(" ");
}
