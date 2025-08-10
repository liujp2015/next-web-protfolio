// import { queryPostPaginate } from "@/app/_actions/post";
import { createPostData } from "./post";

async function seed() {
  createPostData();
  // const data = await queryPostPaginate();
  console.log(123);
  // console.log(data);
}
seed();
