import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { notFound } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import NextDevtoolsPolish from "@/components/NextDevtoolsPolish";
import { site } from "@/data/site";
import { isLang, langs } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

// Applies the saved (or system) theme before first paint to avoid a flash
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <NextDevtoolsPolish />
        {children}
      </body>
    </html>
  );
}
