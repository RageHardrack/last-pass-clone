import { data } from "~~/data/data";
import { IPassword } from "~~/interfaces";

export default defineEventHandler((event): IPassword => {
  const id = event.context.params.id as string;

  const findPasswordCard = data.find((card) => card.id === id);

  return findPasswordCard;
});
