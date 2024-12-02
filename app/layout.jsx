import localFont from 'next/font/local';
import "@/app/global.css";
import Header from "@/app/ui/header.jsx";

export const metadata = {
  title: "Marystretching",
  description: "Йога и не только",
};

const helveticaNeue = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueThin.otf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './fonts/HelveticaNeueLight.otf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './fonts/HelveticaNeueLightItalic.otf',
      style: 'italic',
      weight: '300',
    },
    {
      path: './fonts/HelveticaNeueRoman.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './fonts/HelveticaNeueMedium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './fonts/HelveticaNeueBold.otf',
      style: 'normal',
      weight: '600',
    }
  ],
  variable: '--helveticaNeue',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={helveticaNeue.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
