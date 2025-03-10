import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import "glightbox/dist/css/glightbox.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Sriracha } from "next/font/google";

import "./globals.css";

//Custom components
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./sections/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: '400',
})

const sriracha = Sriracha({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "Aniruddhas Medical Services",
  description: "Invest in good health care. To book medical services, visit our website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/a0e9850775.js" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" crossOrigin="anonymous"></script>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}
      </head>
      <body>
        <TopBar />  
        <Header />
          { children == null ? null : children}
        <Footer />
      </body>
    </html>
  );
}