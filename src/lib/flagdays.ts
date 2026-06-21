import { addDays } from "#/lib/add-days";
import { easterSunday } from "#/lib/easter-sunday"

const year = new Date().getFullYear()

export const flagDays = [
  { date: new Date(year, 0, 1), description: 'Nytår' },
  { date: new Date(year, 1, 5), description: 'HKH Kronprinsesse Marys fødselsdag (født 1972)' },
  { date: new Date(year, 1, 6), description: 'HKH Prinsesse Maries fødselsdag (født 1976)' },
  {
    date: new Date(year, 3, 9),
    description: 'Danmarks besættelse. Der flages på halv stang til kl. 12, herefter på hel stang',
  },
  {
    date: addDays(easterSunday(), -2),
    description: 'Langfredag. Der flages på halv stang hele dagen.',
  },
  { date: easterSunday(), description: 'Påskedag' },
  {
    date: new Date(year, 3, 16),
    description: 'HKH Dronning Magrethes fødselsdag (født 1940)',
  },
  { date: new Date(year, 3, 21), description: 'HKH Prinsesse Isabellas fødselsdag (født 2007)' },
  { date: new Date(year, 3, 29), description: 'HKH Prinsesse Benediktes fødselsdag (født 1944)' },
  { date: new Date(year, 4, 5), description: 'Befrielsesdagen' },
  { date: addDays(easterSunday(), 39), description: 'Kristi Himmelfartsdag' },
  { date: new Date(year, 4, 26), description: 'HKH Kong Frederiks fødselsdag (født 1968)' },
  { date: addDays(easterSunday(), 49), description: 'Pinsedag' },
  { date: new Date(year, 5, 5), description: 'Grundlovsdag' },
  { date: new Date(year, 5, 7), description: 'HKH Prins Joachims fødselsdag (født 1969)' },
  { date: new Date(year, 5, 15), description: 'Valdemarsdag og Genforeningsdagen 1920' },
  {
    date: new Date(year, 5, 21),
    description: 'Grønlands nationaldag. Der flages med det grønlandske flag',
  },
  {
    date: new Date(year, 6, 29),
    description: 'Færøernes nationale festdag, Olai Dag. Der flages med det færøske flag',
  },
  { date: new Date(year, 8, 5), description: 'Danmarks udsendte' },
  { date: new Date(year, 9, 15), description: 'HKH Kronprins Christians fødselsdag (født 2005)' },
  { date: new Date(year, 11, 25), description: 'Juledag' },
]