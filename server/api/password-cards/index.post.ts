import data from "~~/data/data.json";


export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  data.push(body);
  console.log(data);
  return "success";
});
