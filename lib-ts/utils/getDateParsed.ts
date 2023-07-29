export function getDateParsed(date?: string | number | Date): string {
  let date_ =
    date ??
    new Date(
      new Date().setMinutes(
        new Date().getMinutes() - new Date().getTimezoneOffset()
      )
    );

  let r = new Date(date_);
  return r.toISOString().split(".")[0].replace("T", " ");
}
