import type { Metadata } from "next";
import "./index.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://justhungry.co.uk"),
  title: "Just Hungry",
  description: "Just Hungry - Fast food restaurant in Blackpool",
  other: {
    "google-site-verification": "MdPN6W0dvA0WD2qBUFQsqcbkWQOcDctfX8IUd3PCCXc",
  },
  openGraph: {
    title: "Just Hungry",
    description: "Just Hungry - Fast food restaurant in Blackpool",
    url: "https://justhungry.co.uk",
    siteName: "Just Hungry",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Hungry",
    description: "Just Hungry - Fast food restaurant in Blackpool",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/jh.svg" />
      </head>
      <body>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
