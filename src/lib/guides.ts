import fs from "node:fs";
import path from "node:path";

export type Guide = {
  slug: string;
  title: string;
  markdown: string;
};

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export function listGuideSlugs(): string[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getGuide(slug: string): Guide | null {
  const file = path.join(GUIDES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const markdown = fs.readFileSync(file, "utf8");
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch?.[1]?.trim() ?? slug;

  return { slug, title, markdown };
}
