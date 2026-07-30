import "./globals.css";
export const metadata = {
  title: "ERGOTRIX Engineering Solutions Pvt Ltd",
  description:
    "Engineering Excellence. Innovation Delivered. Innovative engineering and product development solutions.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}