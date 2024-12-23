import Link from "next/link";
import { FadeImg } from "./image";
import Image from "next/image";

export const Header = () => {
  return (
    <header
      className="w-full px-10 py-5 absolute top-0 left-0 z-[2]"
      style={{
        background:
          "linear-gradient(180deg, #101010 0%, rgba(16, 16, 16, 0) 100%)",
      }}
    >
      <div className="flex w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={51}
            height={36}
            alt="Waptak"
            quality={100}
          />
        </Link>
      </div>
    </header>
  );
};
