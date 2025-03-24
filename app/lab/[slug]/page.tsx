import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import path from "path";

// For dynamic pages in App Router, we use generateStaticParams
export async function generateStaticParams() {
  const files = fs.readdirSync("md");
  
  return files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "md", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  
  return {
    frontmatter,
    content,
  };
}

export default async function LabPage({ params }: { params: { slug: string } }) {
  // No need to await params, just use them directly
  const { slug } = await params;
  const { frontmatter, content } = await getPost(slug);
  const htmlContent = md().render(content);

  return (
    <div className="prose mx-auto p-4">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}