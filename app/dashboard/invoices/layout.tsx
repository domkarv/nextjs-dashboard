import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme | Invoices',
  description: 'Acme is a fictional company.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
