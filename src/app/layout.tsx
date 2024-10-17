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
    <html lang="en" className={'h-screen'}>
      <body className={ jetBrainsMono.className }>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <NavBar />
          </div>
          <div className="grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
