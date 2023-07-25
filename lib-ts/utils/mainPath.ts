import path from "path";

export function mainPath(dir: string) {
  return path.resolve(process.cwd(), dir ?? "");
}
