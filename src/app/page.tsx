import TextEffect from "@/components/TextEffect";
import HeroDetails from "@/components/HeroDetails";

export default function Home() {
  return (
    <>
      <section className="pt-35 md:pt-35 lg:pt-36 xl:pt-35 xl:h-[calc(100vh-6rem)] xl:flex xl:flex-col xl:justify-around">
        <TextEffect />
        <HeroDetails />
      </section>
    </>
  );
}