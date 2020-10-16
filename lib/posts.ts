import fs from "fs";
import path from "path";

export type Post = {
  id: string;
  fileContents: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  console.log(postsDirectory);
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: Post[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName;

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    //const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      fileContents,
    };
  });
  // Sort posts by date
  return allPostsData;
}
