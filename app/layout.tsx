import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ERGOTRIX Engineering Solutions Pvt Ltd",
  description: "Engineering Excellence. Innovation Delivered.",
  icons: {
    icon: [
      {
        url: "/ergotrix-favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/ergotrix-favicon.png",
    apple: "/ergotrix-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}