import { bakeries, locations } from './routes';

export const fetchBakeries = () => fetch(bakeries)
  .then(response => response.json());

export const fetchLocations = () => fetch(locations)
  .then(response => response.json());

