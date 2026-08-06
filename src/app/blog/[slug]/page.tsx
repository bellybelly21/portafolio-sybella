import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// GENERACIÓN DINÁMICA DE METADATOS SEO (OpenGraph, Twitter y Canonical)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const siteUrl = "https://portafolio-sybella.vercel.app";
  const postUrl = `${siteUrl}/blog/${slug}`;
  
  // Priorizamos coverImage para redes, si no existe usa thumbnail
  const imageToUse = post.meta.coverImage || post.meta.thumbnail;

  return {
    title: post.meta.title,
    description: post.meta.description,
    authors: [{ name: "Sybella Sandoval Soto" }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: postUrl,
      type: "article",
      publishedTime: post.meta.date,
      authors: ["Sybella Sandoval Soto"],
      images: imageToUse ? [{ url: `${siteUrl}${imageToUse}` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: imageToUse ? [`${siteUrl}${imageToUse}`] : [],
    },
  };
}

// Genera las rutas estáticas
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const siteUrl = "https://portafolio-sybella.vercel.app";
  const postUrl = `${siteUrl}/blog/${slug}`;

  // Formatear la fecha a formato ISO para los motores de búsqueda
  const isoDate = post.meta.date ? new Date(post.meta.date).toISOString() : "";
  const formattedDate = post.meta.date
    ? new Date(post.meta.date).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  // Imagen grande para el post (respalda con thumbnail si no hay coverImage)
  const postImage = post.meta.coverImage || post.meta.thumbnail;

  // 2. SCHEMA.ORG
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    image: postImage ? `${siteUrl}${postImage}` : undefined,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: "Sybella Sandoval Soto",
      jobTitle: "Frontend Developer & UX/UI Designer",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Sybella Sandoval Soto",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <>
      {/* Inyección del Schema JSON-LD para Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-full min-h-screen bg-white pb-24 pt-35 md:pt-35 lg:pt-36 xl:pt-35" itemScope itemType="https://schema.org/BlogPosting">
        
        {/* Metadatos ocultos para microformatos RDFa / Schema nativos adicionales */}
        <meta itemProp="inLanguage" content="es-CL" />
        <meta itemProp="datePublished" content={isoDate} />
        <meta itemProp="dateModified" content={isoDate} />

        <div className="mx-auto flex flex-col items-start mb-12">
          
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray mb-4 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50">
            Artículo {formattedDate && `- `}
            {isoDate && (
              <time dateTime={isoDate}>{formattedDate}</time>
            )}
          </span>

          <h1 className="font-bold text-black text-[clamp(2rem,9vw,4rem)] leading-[1.15] tracking-tight mb-6 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50" itemProp="headline">
            {post.meta.title}
          </h1>

          <p className="text-gray text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed mb-10 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50" itemProp="description">
            {post.meta.description}
          </p>

          {postImage && (
            <div className="w-full h-auto max-h-125 rounded-sm overflow-hidden bg-neutral-100 mb-10 xl:mb-20">
              <img
                src={postImage}
                alt={post.meta.title}
                className="w-full h-full object-cover"
                itemProp="image"
              />
            </div>
          )}
        </div>

        <div className="w-full max-w-5xl flex flex-col items-start px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50">
          
          {post.meta.introduction && (
            <p className="text-lg md:text-xl italic text-gray leading-relaxed mb-8 border-l-2 border-black pl-4">
              {post.meta.introduction}
            </p>
          )}

          {/* Cuerpo del artículo */}
          <div className="w-full prose prose-neutral max-w-none text-gray text-base md:text-lg leading-relaxed space-y-6 [&>p]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-4 [&>strong]:text-black" itemProp="articleBody">
            <MDXRemote source={post.content} />
          </div>

          {/* Autoría explícita orientada a Google Knowledge Graph */}
          <div className="w-full mt-16 pt-8 border-t border-neutral-200 text-xl text-black" itemProp="author" itemScope itemType="https://schema.org/Person">
            Escrito por <b itemProp="name">Sybella Sandoval Soto</b>
          </div>
        </div>
      </article>
    </>
  );
}