import { Kalnia } from "next/font/google";
import "./globals.css";
import HeroNavbar from "@/components/Navbars/Navbar";
import Image from "next/image";
import { MainFooter } from "@/components/Footers/MainFooter";

const kalnia = Kalnia({ subsets: ["latin"] });

export const metadata = {
  title: "Eneftee",
  description: "Discover and create unique digital creations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kalnia.className}>
        <Image
          className="absolute w-full object-cover object-left-top h-screen inset-0 top-0 z-[-999]"
          width={1000}
          height={1000}
          src="/shadow-bg.svg"
          alt="bg"
          loading="lazy"
        />
        <HeroNavbar />
        <main className="bg-main min-h-[80vh] w-full mt-20 px-3">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
