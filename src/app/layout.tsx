import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "@/styles/index.css";
import { ReactQueryClientProvider } from "../config/ReactQueryClientProvider";
import ReduxProvider from "@/config/ReduxProvider";

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
      <ReduxProvider>
        <html lang="en">
          <body className={montserrat.className}>{children}</body>
        </html>
      </ReduxProvider>
    </ReactQueryClientProvider>
  );
}
