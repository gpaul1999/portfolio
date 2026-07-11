import "../globals.css";

// Minimal root layout for the `/` language redirect page. The real layout
// (fonts, theme, metadata) lives in app/[lang]/layout.tsx.
export default function RootRedirectLayout({
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
