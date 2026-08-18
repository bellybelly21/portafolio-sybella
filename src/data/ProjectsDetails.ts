export interface Section {
  type: string;
  title: string;
  p1?: string;
  p2?: string;
  boldText?: string;
  image?: string;
  images?: string[];
  sectionImage?: string;
  items?: string[];
  videos?: { src: string; poster: string }[];
}

export interface ProjectDetail {
  title: string;
  slug: string;
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
    slug: "/proyectos/redefinicion-inge",
    categories: ["Experiencia laboral", "Frontend", "UX/UI"],
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
        image: "/proyectos/inge/1-entender-innovar.webp"
      },
      {
        type: "col-paragraphs-with-grid",
        title: "El caos en el equipo",
        p1: "Llegué a un equipo en transición. Ante la salida del Gerente de TI y un desarrollador, el equipo quedó reducido, enfrentando un caos técnico. Fue ahí donde me tocó ser, junto con el único desarrollador que quedó, el equipo que enfrentó el desafío contra el mundo. Debía implementar el nuevo sitio en React, TypeScript y Tailwind (tecnologías que, en ese momento, eran un reto masivo para mí).",
        p2: "Decidí que el orden era innegociable. Construí un Design System completo desde Figma (títulos, colores, componentes, estados) y apliqué la metodología de Atomic Design para estructurar el código. Fue un proceso de meses donde el rigor técnico fue mi mejor aliado para no perder el foco.",
        boldText: "NOTA: no puedo subir evidencias de esto.",
        images: ["/proyectos/inge/1-blog-1.webp", "/proyectos/inge/1-blog-2.webp"]
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
        images: ["/proyectos/inge/1-blog-1.webp", "/proyectos/inge/1-blog-2.webp"]
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
        p1: "Cuando el sitio público estuvo listo, hice el diseño del sitio privado. Craneé los flujos más complejos, especialmente el de cotización y compra de garantías, siempre bajo la premisa: debe ser mejor que el resto. Mis últimos meses cerraron el círculo: mejoramos la comunicación digital gestionando calendarios de contenido, mails automatizados (Mailchimp/Sendgrid) y optimizando la imagen corporativa.",
        p2: "InGe fue mi primera oportunidad para hacer desarrollo web. Sin embargo, mi evolución me pedía más código, más desafío técnico y menos tareas monótonas de diseño gráfico. Renuncié porque el aprendizaje ya no estaba en la zona de confort. Me llevo la gratitud de un equipo increíble y la certeza de que dejé a InGe con una plataforma profesional, las redes sociales consistentes, un perfil que da confianza a los clientes.",
        images: ["/proyectos/inge/1-final-1.webp", "/proyectos/inge/1-final-2.webp", "/proyectos/inge/1-final-3.webp"] 
    }]
},
  "rediseno-portafolio-sybella":{
    title: "Rediseño de mi portafolio profesional v3.0",
    slug: "/proyectos/rediseno-portafolio-sybella",
    categories: ["Fullstack", "UX/UI", "SEO"],
    date: "Jul - Ago 2026",
    descripcion: "Evolución integral de mi marca personal. Un portafolio minimalista, modular y de alto rendimiento, construido para reflejar mi transición hacia el desarrollo fullstack, integrando estrategias de SEO avanzado y optimización de experiencia de usuario.",
    role: "Diseñadora UX/UI y Desarrolladora Fullstack.",
    mission: "Construir una plataforma Fullstack MERN profesional.",
    mainImage: "/proyectos/2-preview-portafolio.webp",
    sections: [{
      type: "row-paragraphs-with-image",
      title: "La evolución de las especies",
      p1: "Todo portafolio tiene un pasado oscuro del que uno se enorgullece. El primero lo construí en 2023 en Webflow para mi proyecto de título; era simple, colorido, algo lento y profundamente junior, pero innovador para el estándar académico de ese momento (¡nadie más había lanzado una web real a internet!).",
      p2: "El segundo nació en un curso SENCE: comencé con HTML y CSS básico, compré mi propio dominio y, aunque estéticamente parecía un payaso de colores, me daba orgullo. Sin embargo, en rendimiento era un desastre a pesar de mis intentos desesperados con optimización de imágenes y SEO on-page.",
      boldText:"¿La lección? Esos dos fracasos estéticos y de performance fueron un buen aprendizaje. Hoy, este nuevo portafolio es la síntesis de todo eso: más maduro, más profesional y fiel a lo que soy.",
      image: "/proyectos/sybella/2-evolucion.webp"
    },

    {
      type: "col-paragraphs-with-image",
    title: "Entre el diseño y el código",
    p1: "Tenía una urgencia clara: actualizar mi portafolio para encontrar un mejor trabajo y por puro orgullo profesional. No perdí el tiempo haciendo wireframes ni lorem ipsums; partí con unos bocetos en papel horribles pero funcionales que me sirvieron de brújula.",
    p2: "De ahí salté directo a Figma para armar una guía de estilos simple y diseñar los mockups reales. Cuando las primeras páginas estuvieron listas, cerré Figma y me lancé al abordaje de Visual Studio Code.",
    boldText: "El tiempo es oro y la verdadera interfaz se construye programando.",
    image: "/proyectos/sybella/2-wireframes.webp"
  },
  {
    type:"col-paragraphs-with-image",
    title:"La tecnología detrás",
    p1:"Con un arsenal de conocimientos más robusto, estructuré el proyecto usando Next.js, React y TypeScript, estilizado con la velocidad de Tailwind CSS. Comencé por el Navbar y el Home, pero enseguida quise dinamismo: integré Framer Motion para las animaciones y Lucide React para la iconografía.",
    p2:"Claro que el camino no estuvo libre de problemas: para el blog intenté usar MDX-remote con una plantilla por post, pero choqué contra la pared con los problemas de deploy en Cloudflare y terminé migrando a Marker. Menos fricción, mejor resultado.",
  },
  {
    type: "col-paragraphs-with-image",
    title: "Matando una mosca con una escopeta",
    p1: "Pude haberme quedado en lo fácil y resolver el formulario de contacto con las herramientas nativas de Next. Pero quise demostrar de qué estoy hecha: monté una base de datos en MongoDB, la conecté a mi frontend mediante un servidor de Node.js con Express.",
    p2: "Deployar fue toda una odisea que me obligó a reestructurar y separar por completo las carpetas de frontend y backend. Hoy corre impecable con el backend en Railway y el frontend en Cloudflare Pages.",
    boldText: "¿El toque final? Integré Resend para automatizar una alerta a mi correo personal cada vez que entra una solicitud.",
    image: "/proyectos/sybella/2-correo.webp"
  },
  {
    type: "row-paragraphs-with-image",
  title:"Unificación de poderes",
  p1:"Un gran sitio no sirve de nada si nadie lo encuentra, aunque el objetivo de este portafolio sólo fuera ser 'de muestra' más que algo comercial que necesita ser encontrado. Pero igual quise meterle SEO on-page, incluyendo schemas RDFa JSON-LD tanto en la web como en el blog.",
  p2:"Rematé la infraestructura configurando un robots.txt, un sitemap.xml, directrices en agents.md y cookies de terceros con GA4. Sé que en el desarrollo web nunca se termina de aprender, y aún queda mucho que hacer, pero el estándar ya está puesto y toca seguir subiendo proyectos.",
  image: "/proyectos/sybella/2-seo.webp"
  }

  ]
  },

  "graficas-rrss-arkenco":{
    title: "Recopilación de gráficas para redes sociales",
    slug: "/proyectos/graficas-rrss-arkenco",
    categories: ["Diseño gráfico", "Experiencia laboral"],
    date: "Dic 2023 - Jul 2025",
    descripcion: "Durante mi tiempo en Arkenco, agencia de Marketing Digital, me encargué de la creación de contenido visual para las redes sociales de la empresa y los distintos clientes. Este trabajo implicó diseñar y producir una gran variedad de posts, carruseles y reels. Aquí presento una muestra del ecosistema gráfico que gestioné, enfocado en resolver requerimientos diversos bajo un flujo constante de producción.",
    role: "Diseñadora gráfica y creadora de contenido visual.",
    mission: "Desarrollar material gráfico atractivo y coherente para los clientes de Arkenco.",
    mainImage: "/proyectos/3-preview-arkenco.webp",
    sections: [
      {
        type: "graphic-gallery",
        title: "Clínica Puerta del Sol",
        p1: "El reto fue crear una identidad visual para una clínica médica a partir de recursos limitados. Trabajar con bancos de imágenes siempre es un desafío porque carecen de autenticidad y rara vez conectan de verdad con la audiencia local, pero muchas veces tocaba resolver con lo que había disponible.",
        p2: "Además del diseño de plantillas para posts y la maquetación de reels, el proceso abarcó la dirección visual en terreno, acompañando registros fotográficos y de video directamente en la clínica. Como detalle curioso, en algunos videos institucionales aparece mi reflejo en las puertas de vidrio y un registro mío haciendo de paciente para las dinámicas visuales.",
        images: [
          "/proyectos/arkenco/3-proyecto-1.webp",
          "/proyectos/arkenco/3-proyecto-2.webp",
          "/proyectos/arkenco/3-proyecto-3.webp",
          "/proyectos/arkenco/3-proyecto-4.webp"
        ],
        videos: [
          { "src": "/proyectos/arkenco/reels/dr-aldo-rimassa-ops.mp4", "poster": "/proyectos/arkenco/reels/dr-aldo-rimassa-ops.webp" },
          { "src": "/proyectos/arkenco/reels/dr-jose-vergara-ops.mp4", "poster": "/proyectos/arkenco/reels/dr-jose-vergara-ops.webp" },
          { "src": "/proyectos/arkenco/reels/uso-pantallas-ops.mp4", "poster": "/proyectos/arkenco/reels/uso-pantallas-ops.webp" }
        ]
      },
      {
        type: "graphic-gallery",
        title: "Miracle Clinic",
        p1: "Una clínica estética con un requerimiento constante de reels; necesitaban dos semanales, gestión de materiales a contratiempo y múltiples correcciones para mantener la pauta al día.",
        p2: "Para optimizar los tiempos de entrega, integré CapCut como herramienta clave para agilizar la edición de video frente a alternativas más lentas como Canva, logrando mantener el ritmo de contenido que exigía esta empresa.",
        sectionImage: "/proyectos/arkenco/3-proyecto-miracle.webp",
        boldText: "Este ritmo de trabajo tan intenso me permitió perfeccionar la eficiencia operativa, la gestión de entregas bajo presión y el manejo de múltiples requerimientos en paralelo. Pero sí, fue estresante.",
        images: [
          "/proyectos/arkenco/3-proyecto-1-miracle.webp", "/proyectos/arkenco/3-proyecto-3-miracle.webp", "/proyectos/arkenco/3-proyecto-2-miracle.webp", "/proyectos/arkenco/3-proyecto-4-miracle.webp"
        ],
        videos: [
          { "src": "/proyectos/arkenco/reels/influencer-claudio-miracle.mp4", "poster": "/proyectos/arkenco/reels/influencer-claudio-miracle.webp" }, 
          { "src": "/proyectos/arkenco/reels/como-llegar-miracle.mp4", "poster": "/proyectos/arkenco/reels/como-llegar-miracle.webp" }, 
          { "src": "/proyectos/arkenco/reels/marcaje-abdominal-miracle.mp4", "poster": "/proyectos/arkenco/reels/marcaje-abdominal-miracle.webp" }
        ]
      },
      {
        type: "graphic-gallery",
        title: "Decorawood",
        p1: "Clientes dinámicos y con proyectos muy versátiles. Más allá de los posts habituales, el trabajo trascendió lo puramente digital cuando asumí el reto de diseñar las gráficas impresas para las puertas de vidrio de su tienda física, llevando el diseño gráfico a un formato de experiencia real.",
        p2: "Además, entre los archivos del proyecto, rescaté una pieza inédita: un video junto a La Botota que no llegó a publicarse de forma oficial en su momento, por lo que se suma como material exclusivo de esta recopilación.",
        sectionImage: "/proyectos/arkenco/3-proyecto-decorawood.webp",
        images: [
          "/proyectos/arkenco/3-proyecto-1-decorawood.webp", "/proyectos/arkenco/3-proyecto-2-decorawood.webp", "/proyectos/arkenco/3-proyecto-3-decorawood.webp", "/proyectos/arkenco/3-proyecto-4-decorawood.webp"
        ],
        videos: [
          { "src": "/proyectos/arkenco/reels/carla-botota-decorawood.mp4", "poster": "/proyectos/arkenco/reels/carla-botota-decorawood.webp" }, 
          { "src": "/proyectos/arkenco/reels/botota-promocional-decorawood.mp4", "poster": "/proyectos/arkenco/reels/botota-promocional-decorawood.webp" }, 
          { "src": "/proyectos/arkenco/reels/botota-perritos-decorawood.mp4", "poster": "/proyectos/arkenco/reels/botota-perritos-decorawood.webp" }
        ]
      },
      {
        type: "row-paragraphs-with-image",
        title: "Otros Proyectos",
        p1: "El ritmo de una agencia implica atender múltiples empresas y requerimientos breves que alimentan las grillas de contenido diario. En esta sección se incluye parte de ese volumen de producción, abarcando desde logos hasta el desarrollo de piezas gráficas para diversos rubros comerciales.",
        p2: "Una muestra del trabajo ágil orientado a resolver la presencia digital de los clientes sobre la marcha, manteniendo la coherencia visual y adaptándose rápidamente a distintas líneas gráficas.",
        image: "/proyectos/arkenco/3-proyectos-grid.webp"
      },
      {
        type: "col-paragraphs-simple",
        title: "Conclusiones del periodo",
        p1: "Gestionar múltiples cuentas simultáneas en el ecosistema de una agencia de marketing digital exige una sólida capacidad de organización y adaptación. Este periodo funcionó como una etapa clave de rendimiento que me permitió dominar altos volúmenes de producción, optimizar flujos de trabajo y estructurar una metodología de diseño versátil.",
        p2: "Mantener un estándar visual elevado en cada entrega demostró la importancia del rigor técnico y estético frente a cualquier desafío operativo, pero no volvería a trabajar en una agencia de marketing nunca más."
      }
    ]
  },

  "rediseno-puerta-del-sol": {
    title: "Rediseño web de Clínica Puerta del Sol",
    slug: "/proyectos/rediseno-puerta-del-sol",
    categories: ["UX/UI"],
    date: "Dic 2023 - Jul 2024",
    descripcion: "Realicé el rediseño completo del sitio web, transformando su interfaz antigua en una propuesta moderna, minimalista y funcional. El proyecto incluyó la creación de un diseño actualizado para todas las páginas del sitio, desde la sección de agendamiento con un flujo de múltiples pasos, hasta plantillas específicas para destacar procedimientos. El enfoque estuvo en mejorar la experiencia del usuario, conservar la información clave del sitio original y garantizar una estructura optimizada. Aunque el desarrollo web no formó parte de mi rol, aseguré que cada diseño fuera claro, accesible y listo para producción.",
    role: "Diseñadora UX/UI, a veces Copywriter.",
    mission: "Modernizar la plataforma digital para mejorar la experiencia del usuario y la navegación.",
    mainImage: "/proyectos/4-preview-puertadelsol.png",
    sections: [
      {
        type: "col-paragraphs-with-image",
        title: "Entendiendo el desafío",
        p1: "El proyecto consistió en un rediseño web completo para modernizar la plataforma de una clínica médica compleja, con un volumen masivo de información sobre especialidades y servicios.",
        p2: "Entre los retos principales destacó resolver las restricciones de accesibilidad del color amarillo corporativo mediante ajustes de contraste y la reestructuración profunda de la arquitectura de información para hacerla intuitiva.",
        boldText: "Además, ante la falta de material suficiente en los textos originales, asumí la redacción estratégica de algunos de los copys promocionales e informativos integrados al interior de las secciones del sitio.",
        image: "/proyectos/puertadelsol/1-wireframes-figma.webp"
      },
      {
        type:"col-paragraphs-triple",
        title:"UX en acción",
        p1:"Uno de los ejes fundamentales del rediseño fue optimizar la conversión y la experiencia en el flujo crítico de agendamiento de horas. Para lograrlo, realicé un proceso exhaustivo de análisis y benchmarking de flujos de la competencia, adaptando las mejores prácticas a los estándares de UX necesarios para simplificar los pasos del paciente.",
        p2:"Aunque el desarrollo de código no formó parte de mi rol en este proyecto, aseguré que cada interfaz y wireframe entregado fuera impecable, claro y fácil de interpretar para la etapa de maquetación.",
        images:["/proyectos/puertadelsol/2-mockup-1.webp", "/proyectos/puertadelsol/2-mockup-2.webp", "/proyectos/puertadelsol/2-mockup-3.webp"]
      },
      {
        "type": "col-paragraphs-with-image",
        "title": "Iteración real y cocreación",
        "p1": "El proceso visual fue profundamente iterativo, especialmente en el diseño del banner principal. La propuesta inicial —a pesar de contar con un sólido criterio técnico— no convenció al cliente en la primera ronda, lo que derivó en un ejercicio de cocreación en tiempo real para integrar sus observaciones",
        "p2": "Lejos de ser un contratiempo, esta experiencia dejó una valiosa lección de madurez profesional: aprender a no casarse con una primera versión y mantener siempre la flexibilidad para transformar aquellos elementos que dábamos por definitivos en busca del equilibrio perfecto entre estética y funcionalidad.",
        "image": "/proyectos/puertadelsol/3-iteracion.webp"
      },
      {
        "type": "col-paragraphs-simple",
        "title": "Optimización y accesibilidad visual",
        "p1": "Uno de los aspectos más técnicos y desafiantes del proyecto fue adaptar la identidad corporativa sin perder su esencia. El tono amarillo característico de la clínica presentaba serios problemas de contraste en las interfaces digitales, lo que afectaba directamente la legibilidad y la accesibilidad web.",
        "p2": "Mediante ajustes rigurosos en la paleta de colores y la jerarquía visual, logré equilibrar la estética de la marca con los estándares actuales de usabilidad, asegurando que cada componente cumpliera con los requisitos de accesibilidad sin comprometer la modernidad del diseño."
      },

      {
        "type": "col-paragraphs-simple",
        "title": "Visita el sitio en producción",
        "p1": "Este fue un gran proyecto, a pesar de que hay un par de cosas dentro del sitio en producción distintas al diseño original. Puedes explorar el resultado final y navegar por la plataforma desarrollada directamente en su sitio web oficial: puertadelsol.cl."
      }

    ]
  }


};