import { Inter, Sniglet } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const sniglet = Sniglet({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
  variable: "--font-sniglet",
});

export const metadata = {
  title: "Meow?",
  description: "Coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sniglet.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
