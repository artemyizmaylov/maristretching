import "./global.css";
import localFont from 'next/font/local';
import Header from "./ui/header.jsx";
import Footer from "./ui/footer";

import Providers from './Providers';

export const metadata = {
  title: "Marystretching",
  description: "Йога и не только",
};

const helveticaNeue = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeueThin.otf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../public/fonts/HelveticaNeueLight.otf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../public/fonts/HelveticaNeueLightItalic.otf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../public/fonts/HelveticaNeueRoman.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../public/fonts/HelveticaNeueMedium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../public/fonts/HelveticaNeueBold.otf',
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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
