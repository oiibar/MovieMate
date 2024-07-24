import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/index.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieMate",
  description: "Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
