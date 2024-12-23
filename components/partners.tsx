import { Partner } from "@/types/model";
import Image from "next/image";

export const Partners = ({ partners }: { partners: Partner[] }) => {
  return (
    <section className="py-10 px-10 flex flex-col items-center">
      <h4 className="text-[32px] mb-6">Наши партнеры</h4>

      <div className="flex flex-wrap gap-4 justify-center">
        {partners.map((partner) => (
          <div className="flex items-center justify-center rounded-[16px] bg-[--grey-color] w-[237px] h-[160px]">
            <Image
              alt={partner.name}
              src={`/partners/partner-${partner.id}.png`}
              width={190}
              height={80}
              quality={100}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
