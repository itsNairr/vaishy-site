
export const metadata = {
  title: "Homepage",
  description: "Coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
