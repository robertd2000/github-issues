export const dateFormater = (date: string) =>
  new Date(date).toLocaleString("en-us", { dateStyle: "long" });
