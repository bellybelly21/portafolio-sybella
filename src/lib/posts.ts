import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  thumbnail?: string;
}

export function getAllPosts(): PostMetadata[] {
  // Verificamos si existe el directorio
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`⚠️ Advertencia: La ruta de posts no existe: ${postsDirectory}`);
    return [];
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Filtramos estrictamente solo los archivos que terminan en .mdx
    const mdxFiles = fileNames.filter((fileName) => fileName.endsWith('.mdx'));

    const allPostsData = mdxFiles.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<PostMetadata, 'slug'>),
      };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("❌ Error leyendo los posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      meta: matterResult.data,
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`❌ Error leyendo el post con slug ${slug}:`, error);
    return null;
  }
}