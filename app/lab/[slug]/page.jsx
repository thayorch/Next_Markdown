import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import path from "path";


// Fetch Markdown content safely
function getContent(slug) {
  try {
    const filePath = path.join(process.cwd(), "md", `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return {
        frontmatter: { title: "Not Found" },
        content: "This page does not exist.",
      };
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);

    return { frontmatter, content };
  } catch (error) {
    console.error("Error loading Markdown file:", error);
    return {
      frontmatter: { title: "Error" },
      content: "An error occurred while loading this page.",
    };
  }
}

export default async function LabPage({ params }) {
  const { slug } = await params;
  const { frontmatter, content } = getContent(slug);
  const rawHtml = md().render(content);

  return (
    <div className="prose mx-auto p-4">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  );
}
