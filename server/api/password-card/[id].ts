import { data } from "~~/data/data";
import { IPassword } from "~~/interfaces";

export default defineEventHandler(async (event): Promise<IPassword | void> => {
  const id = event.context.params.id as string;
  const findPasswordCard = data.find((card) => card.id === id);

  switch (event.req.method) {
    case "GET":
      return findPasswordCard;

    case "PUT":
      return findPasswordCard;

    case "DELETE":
      return findPasswordCard;

    default:
      break;
  }
});
