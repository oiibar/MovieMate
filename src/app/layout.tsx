import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/index.css";
import { ReactQueryClientProvider } from "../config/ReactQueryClientProvider";

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
        <body className={montserrat.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
