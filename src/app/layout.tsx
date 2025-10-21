import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "חנות אונליין",
  description: "קטלוג מוצרים לדוגמה ב-TypeScript ו-Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body>
        <Header />
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
