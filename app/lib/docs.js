import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const filesName = fs.readdirSync(postDirectory); // it will give me all files with an array

  const allDocuments = filesName.map((filesName) => {
    const id = filesName.replace(".md", "");

    const fullPath = path.join(postDirectory, filesName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(fileContents);

    return {
      id,
      ...matterResults.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });
}
