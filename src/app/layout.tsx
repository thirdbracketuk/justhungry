import type { Metadata } from "next";
import "./index";

export const metadata: Metadata = {
  title: "Just Hungry",
  description: "Just Hungry - Fast food restaurant in Blackpool",
  other: {
    "google-site-verification": "MdPN6W0dvA0WD2qBUFQsqcbkWQOcDctfX8IUd3PCCXc",
  },
  openGraph: {
    title: "Just Hungry",
    description: "Just Hungry - Fast food restaurant in Blackpool",
    url: "https://www.justhungry.co.uk/",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/jh.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
