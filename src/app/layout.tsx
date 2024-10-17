import "./globals.css";
import {JetBrains_Mono} from 'next/font/google';
import NavBar from "./navbar";

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ jetBrainsMono.className }>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
