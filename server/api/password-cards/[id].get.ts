export default defineEventHandler((event) => {
    console.log(event.context.params)
  return {world: "hello"};
});