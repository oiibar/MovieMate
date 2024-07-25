import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "@/styles/index.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

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
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
