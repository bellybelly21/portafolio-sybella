import {Metadata} from "next";
import Link from "next/link";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
    title: "Blog y notas", 
    description: "Artículos, reflexiones y guías sobre arquitectura frontend, rendimiento web, calidad digital y diseño de interfaces por Sybella Sandoval Soto.",
  };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full min-h-screen bg-white pt-35 md:pt-35 lg:pt-36 xl:pt-35 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
      
      {/* Cabecera de la sección */}
      <div className="w-full mb-16">
        <h1 className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] mb-4">
        Blog
        </h1>
      </div>

      {/* Listado de Artículos */}
      <div className="w-full grid grid-cols-1 gap-12">
        {posts.map((post) => {
          const formattedDate = post.date
            ? new Date(post.date).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "";

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row gap-8 items-start bg-background p-4 md:p-8 rounded-sm transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200"
            >
              {/* Imagen miniatura del post (si existe) */}
              {post.thumbnail && (
  <div className="w-full md:w-72 h-48 rounded-sm overflow-hidden shrink-0">
    <img
      src={post.thumbnail}
      alt={post.title}
      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
    />
  </div>
)}

              {/* Información del Post */}
              <div className="flex flex-col grow justify-between">
                <div>
                
                  <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-neutral-600 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <span className="text-xs font-semibold uppercase text-gray mb-2 block">
                    ARTÍCULO - {formattedDate}
                  </span>
                  <p className="text-gray text-base leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-black">
                  <span>Leer artículo</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}