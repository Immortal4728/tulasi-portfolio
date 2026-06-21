import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mogili Venkata Kowsalya | Python Developer & CSE Student",
  description: "Mogili Venkata Kowsalya is a Computer Science & Engineering student and Python developer. Minimalist, premium portfolio showcasing machine learning systems, web technologies, and academic certifications.",
  authors: [{ name: "Mogili Venkata Kowsalya" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${caveat.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-[#00FF55] selection:text-[#030303] font-sans">
        {children}
      </body>
    </html>
  );
}
