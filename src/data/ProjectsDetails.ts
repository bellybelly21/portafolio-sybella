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
},
  "rediseno-portafolio-sybella":{
    title: "Rediseño de mi portafolio profesional v3.0",
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
      image: "/proyectos/2-evolucion.webp"
    },

    {
      type: "col-paragraphs-with-image",
    title: "Entre el diseño y el código",
    p1: "Tenía una urgencia clara: actualizar mi portafolio para encontrar un mejor trabajo y por puro orgullo profesional. No perdí el tiempo haciendo wireframes ni lorem ipsums; partí con unos bocetos en papel horribles pero funcionales que me sirvieron de brújula.",
    p2: "De ahí salté directo a Figma para armar una guía de estilos simple y diseñar los mockups reales. Cuando las primeras páginas estuvieron listas, cerré Figma y me lancé al abordaje de Visual Studio Code.",
    boldText: "El tiempo es oro y la verdadera interfaz se construye programando.",
    image: "/proyectos/2-wireframes.webp"
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
    image: "/proyectos/2-correo.webp"
  },
  {
    type: "row-paragraphs-with-image",
  title:"Unificación de poderes",
  p1:"Un gran sitio no sirve de nada si nadie lo encuentra. Por eso blindé el proyecto integrando SEO on-page y técnico avanzado, incluyendo schemas RDFa JSON-LD tanto en la web como en el blog.",
  p2:"Rematé la infraestructura configurando un robots.txt, un sitemap.xml, directrices en agents.md y cookies de terceros con GA4. Sé que en el desarrollo web nunca se termina de aprender, y aún queda mucho que hacer, pero el estándar ya está puesto.",
  image: "/proyectos/2-seo.webp"
  }

  ]
  },

  "graficas-rrss-arkenco":{
    "title": "Recopilación de gráficas para redes sociales",
    "categories": ["Diseño gráfico"],
    "date": "Dic 2023 - Jul 2025",
    "descripcion": "Durante mi tiempo en Arkenco, agencia de Marketing Digital, me encargué de la creación de contenido visual para las redes sociales de la empresa y los distintos clientes. Este trabajo implicó diseñar y producir una gran variedad de posts, carruseles y reels. Aquí presento una muestra del ecosistema gráfico que gestioné. Detrás de cada diseño hay una historia de recursos limitados, clientes exigentes y flujos de trabajo caóticos.",
    "role": "Diseñadora gráfica y creadora de contenido visual.",
    "mission": "Desarrollar material gráfico atractivo y coherente para los clientes de Arkenco.",
    "mainImage": "/proyectos/3-preview-arkenco.webp",
    "sections": [
      {
        "type": "graphic-gallery",
        "title": "Clínica Puerta del Sol",
        "p1": "El reto fue crear una identidad visual para una clínica médica a partir de recursos limitados. Trabajar con bancos de imágenes siempre es un desafío porque carecen de autenticidad y rara vez conectan de verdad con la audiencia local, pero había que ingeniárselas con lo que había.",
        "p2": "Además del diseño de plantillas para posts y la maquetación de reels, a veces me tocaba asumir un rol que no me correspondía: salir a la calle, ir a la clínica y acompañar a grabar. No era mi actividad favorita ni la esencia de mi cargo, pero es un recuerdo de este lugar. De hecho, en algunos videos de cómo llegar a la clínica, aparece mi reflejo en la puerta de vidrio. Y por ahí hay una foto de mí haciendo de paciente.",
        "images": [
          "/proyectos/arkenco/3-proyecto-1.webp",
          "/proyectos/arkenco/3-proyecto-2.webp",
          "/proyectos/arkenco/3-proyecto-3.webp",
          "/proyectos/arkenco/3-proyecto-4.webp"
        ],
        "videos": [
          { "src": "/proyectos/arkenco/reels/dr-aldo-rimassa-ops.mp4", "poster": "/proyectos/arkenco/reels/dr-aldo-rimassa-ops.webp" },
          { "src": "/proyectos/arkenco/reels/dr-jose-vergara-ops.mp4", "poster": "/proyectos/arkenco/reels/dr-jose-vergara-ops.webp" },
          { "src": "/proyectos/arkenco/reels/uso-pantallas-ops.mp4", "poster": "/proyectos/arkenco/reels/uso-pantallas-ops.webp" }
        ]
      },
      {
        "type": "graphic-gallery",
        "title": "Miracle Clinic",
        "p1": "Una clínica estética con un nivel de exigencia altísimo: requerían dos reels semanales, entregas de material a contratiempo y rondas de correcciones continuas. Ahí adjunté un pantallazo de todos los videos que hice para ellos.",
        "p2": "Aunque editar en CapCut me permitía resolver con agilidad frente a las limitaciones de otras herramientas, el volumen de trabajo superó con creces lo acordado en un principio.",
        "sectionImage": "/proyectos/arkenco/3-proyecto-miracle.webp",
        "boldText": "Esta experiencia fue el punto de inflexión que me enseñó a identificar los límites entre la colaboración flexible y la sobrecarga.",
        "images": [
          "/proyectos/arkenco/3-proyecto-1-miracle.webp", "/proyectos/arkenco/3-proyecto-3-miracle.webp", "/proyectos/arkenco/3-proyecto-2-miracle.webp", "/proyectos/arkenco/3-proyecto-4-miracle.webp"
        ],
        "videos": [
          { "src": "/proyectos/arkenco/reels/influencer-claudio-miracle.mp4", "poster": "/proyectos/arkenco/reels/influencer-claudio-miracle.webp" }, 
          { "src": "/proyectos/arkenco/reels/como-llegar-miracle.mp4", "poster": "/proyectos/arkenco/reels/como-llegar-miracle.webp" }, 
          { "src": "/proyectos/arkenco/reels/marcaje-abdominal-miracle.mp4", "poster": "/proyectos/arkenco/reels/marcaje-abdominal-miracle.webp" }
        ]
      },
      {
        "type": "graphic-gallery",
        "title": "Decorawood",
        "p1": "Clientes dinámicos y exigentes. Diseñar para ellos siempre fue divertido; más allá de los posts habituales, el proyecto trascendió lo digital cuando asumí el reto de diseñar las gráficas impresas para las puertas de vidrio de su tienda física, un ejercicio donde el diseño gráfico se volvió realidad.",
        "p2": "Además, entre los archivos perdidos, descubrí una joyita inédita, un video divertido de las mascotas de La Botota, que por cosas de la agencia, nunca llegó a subirse oficialmente a sus redes. ¡Material exclusivo que por fin ve la luz!",
        "sectionImage": "/proyectos/arkenco/3-proyecto-decorawood.webp",
        "images": [
          "/proyectos/arkenco/3-proyecto-1-decorawood.webp", "/proyectos/arkenco/3-proyecto-2-decorawood.webp", "/proyectos/arkenco/3-proyecto-3-decorawood.webp", "/proyectos/arkenco/3-proyecto-4-decorawood.webp",
        ],
        "videos": [
          { "src": "/proyectos/arkenco/reels/carla-botota-decorawood.mp4", "poster": "/proyectos/arkenco/reels/carla-botota-decorawood.webp" }, 
          { "src": "/proyectos/arkenco/reels/botota-promocional-decorawood.mp4", "poster": "/proyectos/arkenco/reels/botota-promocional-decorawood.webp" }, 
          { "src": "/proyectos/arkenco/reels/botota-perritos-decorawood.mp4", "poster": "/proyectos/arkenco/reels/botota-perritos-decorawood.webp" }
        ]
      },
      {
        "type": "row-paragraphs-with-image",
        "title": "Otros Proyectos",
        "p1": "En una agencia el ritmo nunca frena, y en el tintero quedaron múltiples marcas pasajeras y proyectos breves que alimentaron las grillas de contenido diario. De aquí destaco los logos que tuve realizar (forzosamente, yo jamás haría un logo porque sí, los odio) de DST Chile y el de Arkenco.",
        "p2": "Aquí recopilo una muestra del volumen de producción. Piezas rápidas, funcionales y pensadas para resolver la presencia digital de diversos rubros sobre la marcha; hice lo que pude y di todo de mí para que quedara bien, a veces funcionaba, otras veces los clientes no estaban satisfechos. Pero así es la vida en una agencia.",
        "image": "/proyectos/arkenco/3-proyectos-grid.webp", 
      },
      {
        "type": "col-paragraphs-simple",
        "title": "Detrás de escena: La realidad de agencia",
        "p1": "Gestionar múltiples diseños simultáneos en el ecosistema de una agencia de marketing digital exige una capacidad de organización quirúrgica. Este periodo funcionó como una auténtica incubadora de rendimiento; me enseñó a dominar altos volúmenes de producción, optimizar flujos de trabajo bajo presión y consolidar una ética inquebrantable sobre el valor del tiempo profesional.",
        "p2": "Si las piezas gráficas mantenían un estándar impecable, era porque la calidad la dictaba mi propio rigor visual, transformando cualquier fricción del entorno en un aprendizaje de blindaje profesional. En este contexto, quiero decir que jamás trabajen en una agencia de diseño. Gracias por leer.",
      }
    ]
  },


};