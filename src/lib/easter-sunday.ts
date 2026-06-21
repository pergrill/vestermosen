export const easterSunday = () => {
  const year = new Date().getFullYear()

  const g = year % 19
  const c = Math.floor(year / 100)
  const h = Math.floor(c - Math.floor(c / 4) - Math.floor((8 * c + 13) / 25) + 19 * g + 15) % 30
  const i =
    h -
    Math.floor(h / 28) *
      (1 - Math.floor(h / 28) * Math.floor(29 / (h + 1)) * Math.floor((21 - g) / 11))

  const j = (year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4)) % 7
  let day = i - j + 28
  let month = 3

  if (day > 31) {
    month++
    day -= 31
  }

  return new Date(year, month - 1, day)
}