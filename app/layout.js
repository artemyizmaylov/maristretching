import "./globals.css";

export const metadata = {
  title: "Marystretching",
  description: "Йога и не только",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
