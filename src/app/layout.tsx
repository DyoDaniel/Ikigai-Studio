import type { Metadata } from "next";
import {Montserrat, Oswald} from "next/font/google"
import "./globals.css";


const montserrat = Montserrat({
  weight: ['400','700'],
  subsets: ['latin']
})

const oswald = Oswald({
  weight: ['400','700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Ikigai Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      </head>
      <body className={`${montserrat.className} ${oswald.className}`}>
        {children}
      </body>
    </html>
  );
}
