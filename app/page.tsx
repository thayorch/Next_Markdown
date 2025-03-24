// app/page.tsx
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

interface FrontmatterData {
  title: string;
  tag?: string;
}

interface Frontmatter {
  slug: string;
  fm_data: FrontmatterData;
}

async function getMarkdownFM() {
  const files = fs.readdirSync("md");
  const frontmatter = files.map((fileName: string) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`md/${fileName}`, "utf-8");
    const { data: fm_data } = matter(readFile) as unknown as { data: FrontmatterData };
    return {
      slug,
      fm_data,
    };
  });

  return frontmatter;
}

export default async function Home() {
  const frontmatter = await getMarkdownFM();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {frontmatter?.map(({ slug, fm_data }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-md shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/lab/${slug}`}>
            <div className="relative aspect-video">
              <Image
                fill
                src="/cscmu.png"
                alt={fm_data.title}
                className="object-cover"
              />
            </div>
            <h1 className="p-4">{fm_data.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}