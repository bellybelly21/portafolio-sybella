export interface Project {
    id: number;
    title: string;
    categories: string[];
    date: string;
    tags: string[];
    logo: string;
    image: string;
    link: string;
  }
  
  const rawProyectos: Project[] = [
    { 
        id: 1, 
        title: "Redefinición del ecosistema digital InGe!", 
        categories: ["Experiencia laboral", "Frontend"], 
        date: "Mar 2025 - Jul 2026", 
        tags: ["Experiencia laboral", "Frontend"], 
        logo: "/proyectos/1-logo-inge.png", 
        image: "/proyectos/1-preview-inge.webp", 
        link: "/proyectos/redefinicion-inge" 
      },
      { 
        id: 2, 
        title: "Rediseño de mi portafolio profesional v3.0", 
        categories: ["Fullstack", "UX/UI", "SEO"],
        date: "Jul - Ago 2026", 
        tags: ["UX/UI", "Fullstack", "SEO"], 
        logo: "/images/logo-sybella-sandoval.png", 
        image: "/proyectos/2-preview-portafolio.webp", 
        link: "/proyectos/rediseno-portafolio-sybella" 
      },
      {
        id: 3,
        title: "Recopilación de gráficas para redes sociales",
        categories: ["Diseño gráfico"],
        date: "Dic 2023 - Jul 2025",
        tags: ["Diseño gráfico"],
        logo: "/proyectos/3-logo-arkenco.png",
        image: "/proyectos/3-preview-arkenco.webp",
        link: "/proyectos/graficas-rrss-arkenco"
      },
  
    //   {
    //     id: 4,
    //   title: "Rediseño web de Clínica Puerta del Sol",
    //   categories: ["UX/UI"],
    //   date: "Dic 2023 - Jul 2024",
    //   tags: ["UX/UI"],
    //   logo: "/logo-empresa.png",
    //   image: "/proyectos/4.jpg",
    //   link: "/proyectos/rediseno-web-puerta-del-sol"
    // },
    // {
    //   id: 5,
    //   title:"Recopilación webs y landing pages",
    //   categories: ["UX/UI"],
    //   date: "Ene 2024 - Jul 2025",
    //   tags: ["UX/UI"],
    //   logo: "/logo-empresa.png",
    //   image: "/proyectos/5.jpg",
    //   link: "/proyectos/recopilacion-webs-arkenco"
    // },
    // {
    //   id: 6,
    //   title: "Rediseño Landing Macrodent",
    //   categories: ["Diseño gráfico", "SEO"],
    //   date: "Sep 2024",
    //   tags: ["Diseño gráfico", "SEO"],
    //   logo: "/logo-empresa.png",
    //   image: "/proyectos/6.jpg",
    //   link: "/proyectos/rediseno-landing-macrodent"
    // },
    // {
    //   id: 7,
    //   title: "Rediseño Landing RDOX",
    //   categories: ["Diseño gráfico", "SEO"],
    //   date: "Ene 2025",
    //   tags: ["Diseño gráfico", "SEO"],
    //   logo: "/logo-empresa.png",
    //   image: "/proyectos/7.jpg",
    //   link: "/proyectos/rediseno-landing-rdox"
    // }
  
    ];
  
  export const proyectosData: Project[] = rawProyectos.map(p => {
    let categories = [...p.categories];
    if (categories.includes("Fullstack")) {
      if (!categories.includes("Frontend")) categories.push("Frontend");
      if (!categories.includes("Backend")) categories.push("Backend");
    }
    return { ...p, categories };
  });