import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const postsDir = path.join(process.cwd(), "src/app/blog/content");

export function getAllPosts() {
  const filename = fs.readdirSync(postsDir);

  return filename.map((f) => {
    const slug = f.replace(/\.mdx$/, "");
    const fPath = path.join(postsDir, f);
    const fCont = fs.readFileSync(fPath, "utf8");

    const { data } = matter(fCont);

    return {
      slug,
      ...data,
    };
  });
}

export async function getPost(slug: any) {
  const fPath = path.join(postsDir, `${slug}.mdx`);
  const fCont = fs.readFileSync(fPath, "utf8");

  const { content, data } = matter(fCont);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return {
    slug,
    metadata: data,
    content: compiledContent, // ✅ already JSX
  };
}
