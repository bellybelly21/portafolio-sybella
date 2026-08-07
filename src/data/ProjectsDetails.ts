export interface Section {
  type: string;
  title: string;
  p1?: string;
  p2?: string;
  boldText?: string;
  image?: string;
  images?: string[];
  items?: string[];
}

export interface ProjectDetail {
  title: string;
  categories: string[];
  date: string;
  descripcion: string;
  role: string;
  mission: string;
  mainImage: string;
  sections: Section[];
}

export const proyectosDetalle: Record<string, ProjectDetail> = {
  "redefinicion-inge": {
    title: "Redefinición del ecosistema digital de InGe!",
    categories: ["Experiencia laboral", "Frontend"],
    date: "Mar 2025 - Jul 2026",
    descripcion: "Cuando llegué a InGe, la presencia digital era, en el mejor de los casos, fragmentada. Me encontré con una empresa que tenía diseños antiguos desperdigados en distintos dominios, una identidad visual que no transmitía la seriedad del sector y una infraestructura que, técnicamente, estaba pidiendo a gritos una renovación total.",
    role: "Diseñadora gráfica UX/UI, desarrolladora Frontend, entre otros.",
    mission: "Unificar, profesionalizar y escalar una plataforma olvidada.",
    mainImage: "/proyectos/1-preview-inge.webp",
    sections: [
      {
        type: "row-paragraphs-with-image",
        title: "Entender para innovar",
        p1: "No empecé programando; empecé observando. El primer día creé un espacio en Miro para realizar un benchmark agresivo de la competencia, que en este caso fueron Maxxa, Progarantía, Finfast, Avla, entre otros. Analicé sus flujos de usuario, puntos de fricción, y lo más importante: sus star points (ideas que ellos hacían bien y nosotros podíamos hacer mejor).",
        p2: "Documenté desde la experiencia de usuario en sus sitios públicos hasta cómo sus ejecutivas gestionaban la comunicación por WhatsApp. Realmente me pasé stalkeando. Con esta base, propuse una estrategia integral. Desde la unificación de la firma de correos, hasta la implementación de un ecosistema de Google Maps profesional.",
        boldText: "La confianza es un activo y, en ese momento, InGe necesitaba construir la suya desde cero.",
        image: "/proyectos/1-entender-innovar.webp"
      },
      {
        type: "col-paragraphs-with-grid",
        title: "El caos en el equipo",
        p1: "Llegué a un equipo en transición. Ante la salida del Gerente de TI y un desarrollador, el equipo quedó reducido, enfrentando un caos técnico. Fue ahí donde me tocó ser, junto con el único desarrollador que quedó, el equipo que enfrentó el desafío contra el mundo. Debía implementar el nuevo sitio en React, TypeScript y Tailwind (tecnologías que, en ese momento, eran un reto masivo para mí).",
        p2: "Decidí que el orden era innegociable. Construí un Design System completo desde Figma (títulos, colores, componentes, estados) y apliqué la metodología de Atomic Design para estructurar el código. Fue un proceso de meses donde el rigor técnico fue mi mejor aliado para no perder el foco.",
        boldText: "NOTA: no puedo subir evidencias de esto.",
        images: ["/proyectos/1-blog-1.webp", "/proyectos/1-blog-2.webp"]
      },
      {
        type: "col-paragraphs-with-list",
        title: "Desafíos y soluciones rata",
        p1: "El proyecto tenía desafíos técnicos de alta complejidad:",
        items: [
          "Buscador de Licitaciones: Integración con API REST de Mercado Público con manejo de data en tiempo real.",
          "Verificador de Certificados: Desarrollo de una lógica que consumía una API interna, procesaba archivos en Base64 y generaba PDFs.",
          "Muchos formularios: Por lo menos 6 formularios que debían ser conectados correctamente (y yo sin saber cómo hacerlo, pero se logró!).",
          "El Blog 'In-house': Necesitábamos SEO, pero no teníamos CMS externo. ¿La solución? Creé un sistema donde el contenido vivía en un JSON y se renderizaba mediante una única plantilla. Como los crawlers no leían el contenido dinámico, programé un script en JS que generaba páginas HTML estáticas por cada post. Resultado: Indexación perfecta, etiquetas SEO optimizadas y soporte para Open Graph (og:image) para que, cuando el contenido se compartiera en redes, se viera impecable."
        ],
        boldText: "Aquí mi mayor reto y mi mayor orgullo: el Blog",
        images: ["/proyectos/1-blog-1.jpg", "/proyectos/1-blog-2.jpg"]
      },
      {
        type: "col-paragraphs-simple",
        title: "La obsesión por el Performance",
        p1: "Mi estándar era el 'verde' en PageSpeed, pero me enfrenté a las limitaciones arquitectónicas naturales de una SPA  compleja. A pesar de implementar técnicas avanzadas como code splitting, lazy loading y optimización de bundles, entendí que la hidratación de componentes en React y la carga dinámica de scripts de terceros (como el ecosistema de Google) imponen un techo técnico en las métricas sintéticas.",
        p2: "Ante esto, no me quedó de otra que ver el lado positivo:",
        boldText: "En lugar de obsesionarme con métricas de carga puramente teóricas, enfoqué mis esfuerzos en asegurar un 100/100 en SEO y Accesibilidad, garantizando que el sitio fuera legible para crawlers y usable para todo tipo de personas."
      },
      {
        type: "col-paragraphs-triple",
        title: "Resultados finales",
        p1: "Cuando el sitio público estuvo listo, lideré el diseño del sitio privado. Craneé los flujos más complejos, especialmente el de cotización y compra de garantías, siempre bajo la premisa: debe ser mejor que el resto. Mis últimos meses cerraron el círculo: mejoramos la comunicación digital gestionando calendarios de contenido, mails automatizados (Mailchimp/Sendgrid) y optimizando la imagen corporativa.",
        p2: "InGe fue mi escuela de guerra. Sin embargo, mi evolución me pedía más código, más desafío técnico y menos tareas monótonas de diseño gráfico. Renuncié porque el aprendizaje ya no estaba en la zona de confort. Me llevo la gratitud de un equipo increíble y la certeza de que dejé a InGe con una plataforma profesional, las redes sociales consistentes, un perfil que da confianza a los clientes.",
        images: ["/proyectos/1-final-1.webp", "/proyectos/1-final-2.webp", "/proyectos/1-final-3.webp"] 
    }]
}};