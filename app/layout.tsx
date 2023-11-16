import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme',
  description: 'Acme is a fictional company.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
