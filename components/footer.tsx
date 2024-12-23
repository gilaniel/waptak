import Image from "next/image";
import { Form } from "./form";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-[--black] py-[60px] px-[80px]">
      <div className="flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[110px]">
        <Image src="/logo.svg" alt="Waptak" width={74} height={52} />

        <Form />
      </div>

      <div className="flex flex-wrap justify-center xl:justify-start gap-5 text-white mt-[80px]">
        <Link
          href="/privacy_policy"
          className="text-[12px]"
          // style={{ fontFamily: "var(--font-family)" }}
        >
          Политика обработки персональных данных
        </Link>
        <span className="text-[12px]">
          {new Date().getFullYear()} Waptak Entertainment DMCC. All Rights
          Reserved
        </span>
      </div>
    </footer>
  );
};
