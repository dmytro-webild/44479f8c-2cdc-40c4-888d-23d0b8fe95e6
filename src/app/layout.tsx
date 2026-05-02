import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Cake Crafts - Customised Cake Studio Pune',
  description: 'Experience artisanal, custom-made cakes in Kharadi, Pune. Cake Crafts delivers exceptional visual artistry and delicious flavours for your events.',
  openGraph: {
    "title": "Cake Crafts - Customised Cake Studio Pune",
    "description": "Experience artisanal, custom-made cakes in Kharadi, Pune.",
    "siteName": "Cake Crafts",
    "type": "website"
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
