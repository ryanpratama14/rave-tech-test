import { type ClassValue, clsx } from "clsx";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

const IS_CLIENT = typeof window !== "undefined";
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);

const getBaseUrl = () => {
  if (IS_CLIENT) return `${window.location.origin}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

const BASE_URL = { development: getBaseUrl(), production: process.env.NEXT_PUBLIC_URL };

const getUrl = ({ path, type = "production" }: { path: string; type?: keyof typeof BASE_URL }) => `${BASE_URL[type]}${path}`;

export const getMetadata = async ({
  path,
  title,
  description,
  imageUrl,
}: {
  path: string;
  title: string;
  description: string;
  imageUrl: string;
}): Promise<Metadata> => {
  const url = getUrl({ path });
  const images = [{ url: imageUrl, alt: title }];
  const author = "Rave";

  return {
    generator: author,
    applicationName: author,
    creator: author,
    publisher: author,
    category: "technology",
    referrer: "origin-when-cross-origin",
    authors: [{ name: title, url }],
    metadataBase: new URL(url),
    title: { default: title, template: "%s | Rave" },
    description,
    openGraph: { title: { default: title, template: `%s | ${title}` }, description, url, siteName: title, locale: "en_US", type: "website", images },
    twitter: { card: "summary_large_image", title, description, images },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    appleWebApp: { capable: true, title, statusBarStyle: "default" },
  };
};
