import data from "~~/data/data.json";
import { IPassword } from '~~/interfaces';

export default defineEventHandler((event): IPassword[] => {
  return data as IPassword[];
});
