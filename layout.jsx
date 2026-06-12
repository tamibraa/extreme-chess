export const metadata = {
  title: "Extreme Chess",
  description: "A neon synthwave chess variant — atomic, king of the hill, three-check, crazyhouse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#04010a" }}>{children}</body>
    </html>
  );
}
