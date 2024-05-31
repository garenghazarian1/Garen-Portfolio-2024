import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "<GAREN>",
  description: "PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
