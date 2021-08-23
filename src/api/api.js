import { bakeries, cities, schedule } from './routes'

export const fetchBakeries = () => fetch(bakeries)
  .then(response => response.json())

export const fetchCities = () => fetch(cities)
  .then(response => response.json())

export const fetchSchedule = () => fetch(schedule)
  .then(response => response.json())
