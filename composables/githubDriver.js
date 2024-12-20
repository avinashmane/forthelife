import { createStorage } from "unstorage";
import githubDriver from "unstorage/drivers/github";

export const runpixDocsGH = createStorage({
  driver: githubDriver({
    repo: "avinashmane/runpix-docs", //"oneminch/notes",//
    branch: "master", //"main",//
    dir: "/",
  }),
});