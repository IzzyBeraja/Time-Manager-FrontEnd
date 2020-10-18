import fs from "fs";
import path from "path";

export type Markdown = {
  fileContents: string;
};

export const getMarkdownByName = (name: string) => {
  const postPath = path.join(process.cwd(), "posts", name);
  const file: Markdown = { fileContents: fs.readFileSync(postPath, "utf8") };
  return file;
};
