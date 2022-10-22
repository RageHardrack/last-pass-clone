import { data } from "~~/data/data";
import { IPassword } from "~~/interfaces";

export default defineEventHandler(async (event): Promise<IPassword | void> => {
  const id = event.context.params.id as string;

  const findPasswordCard = data.find((card) => card.id === id);

  if (!findPasswordCard) throw new Error("Card not found");


  switch (event.req.method) {
    case "GET":
      return findPasswordCard;

    case "PUT":
      const body: IPassword = await readBody(event);

      findPasswordCard.url = body.url
      findPasswordCard.name = body.name
      findPasswordCard.username = body.username
      findPasswordCard.password = body.password
      return findPasswordCard;

    case "DELETE":
      
      break;

    default:
      throw new Error("Card not found");
  }
});
