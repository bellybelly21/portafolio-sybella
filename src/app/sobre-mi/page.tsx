import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Mí", 
    description: "Conoce mi trayectoria como diseñadora UX/UI y frontend developer. Mis gustos personales, habilidades y proyecciones.",
  };

  
  export default function SobreMiPage() {
    let currentYear = new Date().getFullYear();
    const currentMonth = new Date(). getMonth();
    const currentDay = new Date().getDate();
    
    if (currentMonth < 11 && currentDay < 21) {
      currentYear -= 1; 
    }

    const edad = currentYear - 2001;

    return (
      <main className="bg-hero-gradient w-full min-h-screen flex flex-col justify-center pt-35 md:pt-35 lg:pt-36 xl:pt-40 px-6 md:px-10 lg:px-31 xl:px-37 2xl:px-50 pb-30">
        
        {/* Título Principal */}
        <h1 className="text-black font-bold text-[clamp(3rem,9vw,16rem)] leading-[1.26] mb-4">
          Sobre mí
        </h1>
  
        {/* Subtítulo h2 */}
        <h2 className="text-black font-bold text-[clamp(2rem,8vw,56px)] leading-tight mb-8 md:mb-12">
          Hola, soy Sybella. {edad} años, chilena.
        </h2>
  
        <section className="w-full max-w-5xl">
{/* Primer bloque de párrafos */}
<div className="flex flex-col gap-8 md:gap-12 mb-16">
          <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
          Soy diseñadora gráfica, especialista en UX/UI y desarrolladora Fullstack en constante evolución.
          </p>
          <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
          Durante los últimos años, me he especializado en construir puentes entre el diseño de interfaces y la ingeniería, intento que cada producto que sale de mis manos sea no solo visualmente impecable, sino técnicamente robusto y eficiente.
          </p>
        </div>
  
        {/* Dos secciones con título semibold y párrafo */}
        <div className="grid grid-cols-1 gap-12 mb-8">
          <div>
            <h3 className="text-black font-semibold text-[clamp(1.25rem,2vw,1.5rem)] mb-3">
            ¿Cómo llegué aquí? 
            </h3>
            <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
            De pequeña, mi curiosidad me llevó a buscar en Google "cómo ser hacker". No entendí nada de lo que encontré, pero esa chispa de querer entender cómo funcionan las máquinas y cómo se manipula el código nunca se apagó. Hoy, esa misma curiosidad es la que me impulsa a auditar, aprender y optimizar cada proyecto en el que me involucro.
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold text-[clamp(1.25rem,2vw,1.5rem)] mb-3">
            Más allá del código y los píxeles:
            </h3>
            <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
            Soy una persona observadora y, a veces, demasiado crítica con lo que veo en internet. Si uso un producto digital, no puedo evitar preguntarme: ¿Por qué eligieron este flujo? ¿Quién es su público real? ¿Por qué esta decisión técnica está matando la experiencia del usuario?
            </p>
          </div>
        </div>
  
        {/* Segundo bloque de párrafos normales */}
        <div className="flex flex-col gap-8 mb-16">
          <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
          Fuera de la pantalla, soy humana. Me gusta reflexionar sobre cómo gastamos nuestro tiempo       —que es nuestro recurso más limitado—, tomar tecito, andar en mi moto y escribir cosas. Mi soundtrack de este año transita entre Chancho en Piedra, Manuel García y Lucybell.
          </p>
          <p className="text-gray text-[clamp(1rem,1.5vw,1.25rem)] ">
          Creo firmemente que el diseño y el desarrollo no son solo habilidades: son herramientas para crear productos que hagan la vida de los demás un poco más simple y, sobre todo, mucho más honesta.
          </p>
        </div>
  
        {/* Sección final con título e imagen */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex-1">
            <h3 className="text-black font-bold text-[clamp(1.25rem,2vw,1.5rem)] mb-4">
              Esta soy yo.
            </h3>

          </div>
          
          <div className="w-full lg:w-auto flex justify-center">
            <img 
              src="/images/sobre-mi-foto.webp" 
              alt="Foto de perfil de Sybella Sandoval" 
              className="w-full lg:w-67 h-auto lg:h-98.25 object-cover rounded-sm  pointer-events-none"
            />
          </div>
        </div>
        </section>
        
  
      </main>
    );
  }