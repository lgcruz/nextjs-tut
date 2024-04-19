import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lusitana.variable}`}>
      <body className={`font-lusitana antialiased`}>{children}</body>
    </html>
  );
}
