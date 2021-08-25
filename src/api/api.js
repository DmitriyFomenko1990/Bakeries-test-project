import { bakeries, locations, schedule } from './routes';

export const fetchBakeries = () => fetch(bakeries)
  .then(response => response.json());

export const fetchLocations = () => fetch(locations)
  .then(response => response.json());

export const fetchSchedule = () => fetch(schedule)
  .then(response => response.json());
