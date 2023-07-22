export function getDateParsed(date?: string | number | Date): string {
  let date_ = date ?? new Date();

  let r = new Date(date_);
  return r.toISOString().split(".")[0].replace("T", " ");
}
