import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-kod",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Waptak",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${inter.variable} relative`}>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100072440, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/100072440"
              style={{ position: "absolute", left: -"9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
