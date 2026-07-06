import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Just Hungry",
  description: "Just Hungry - Fast food restaurant in Blackpool",
  other: {
    "google-site-verification": "MdPN6W0dvA0WD2qBUFQsqcbkWQOcDctfX8IUd3PCCXc",
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
