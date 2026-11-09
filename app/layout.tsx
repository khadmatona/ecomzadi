import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { SmoothScroll } from "@/lib/motion/SmoothScroll";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/content";
import "./globals.css";

const heading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline} in Marrakech`,
  description:
    "Ecomzadi is a digital marketing agency in Marrakech helping brands grow through performance media, SEO, social, content, and e-commerce web development.",
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Ecomzadi is a digital marketing agency in Marrakech helping brands grow through performance media, SEO, social, content, and e-commerce web development.",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("ecomzadi-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t)}catch(e){}})();',
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
