export default defineEventHandler((event) => {
    console.log("hello from server")
  return {world: "hello"};
});
