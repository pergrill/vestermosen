export const addDays = (date: Date, days: number) => {
  return date.getTime() + 1000 * 60 * 60 * 24 * days
}