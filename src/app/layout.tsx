import './globals.css';
import Navbar from './components/navbar';
import NotificationBar from './components/notification-bar';

export const metadata = {
  title: 'InApp IEEE CS Awards',
  description: 'Apply for IEEE CS Awards',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotificationBar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
