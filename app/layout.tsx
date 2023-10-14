import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/utils/cn';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextina',
  description: 'NextJS + TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50',
          `${inter.className}`
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <header>
              <div className='flex items-center justify-between'>
                <ThemeToggle />
                <nav className='ml-auto text-sm font-medium space-x-6'>
                  <Link href='/'>Home</Link>
                  <Link href='/about'>About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
