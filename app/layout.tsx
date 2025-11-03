import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

import { Roboto } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const robotoFont = Roboto({
  weight: ["400", "600", "800"],
  variable: "--font-roboto-400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Note Hub App`,
  description: "Training in metaData and zustand",
  openGraph: {
    title: `Note Hub App`,
    description: "Web App for your notes ",
    url: `https://notehub.com/`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note Hub image",
      },
    ],
    type: "article",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>
        <TanStackProvider>
          <AuthProvider>
            <Header></Header>
            {children}
            {modal}
            <Footer></Footer>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
