import {data} from "~~/data/data";
import { IPassword } from '~~/interfaces';

export default defineEventHandler((event): IPassword[] => {
  return data;
});
