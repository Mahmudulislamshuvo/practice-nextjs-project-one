import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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

export async function getDocumentContent(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const proccessContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = proccessContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
