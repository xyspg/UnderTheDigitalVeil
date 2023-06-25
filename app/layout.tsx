import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";
import { Martian_Mono } from 'next/font/google'


const ApercuBold = localFont({
  src: "../public/Apercu_Bold.otf",
  display: "swap",
  variable: "--apercu-bold",
});

const ApercuLight = localFont({
  src: "../public/Apercu_Light.otf",
  display: "swap",
  variable: "--apercu-light",
});

const MartianMono = Martian_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font--martian-mono'
})


export const metadata = {
  title: "Under The Digital Veil",
  description: "A Deep Dive into Data Privacy and Cybersecurity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={clsx(
          ApercuBold.variable,
          ApercuLight.variable,
          MartianMono.variable,
          "bg-[#161A1D]"
        )}
      >
        {children}
      </body>
    </html>
  );
}
