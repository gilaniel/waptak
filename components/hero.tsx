import Image from "next/image";
import { Button } from "./button";

export const Hero = () => {
  return (
    <section className="w-full mb-[80px]">
      <div className="banner relative w-full h-[551px] md:h-[414px] z-[1] p-5 py-10 md:p-10 flex items-end">
        <picture>
          <source srcSet="/bg/bg-xxl.png" media="(min-width: 1440px)" />
          <source srcSet="/bg/bg-xl.png" media="(min-width: 1280px)" />
          <source srcSet="/bg/bg-md.png" media="(min-width: 768px)" />
          <Image
            src="/bg/bg-sm.png"
            alt="Waptak"
            sizes="100%"
            fill
            quality={100}
            className="object-cover object-center"
          />
        </picture>
        <div className="flex flex-col gap-8 relative z-[3] max-w-[504px]">
          <h1 className="text-white">Найдите аудиторию для вашего контента</h1>
          <div>
            <Button>Связаться с нами</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
