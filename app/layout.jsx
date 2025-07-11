import "./global.css";
import localFont from 'next/font/local';
import Header from "./ui/header.jsx";
import Footer from "./ui/footer";

import Providers from './components/Providers';

export const metadata = {
  title: "maristretching",
  description: "Йога и не только",
  keywords: "йога, растяжка, спорт, Мари, Мария, Дягелева, пилатес, курсы, занятия"
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
  display: 'swap',
  preload: false,
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
