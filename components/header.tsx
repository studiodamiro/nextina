import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header>
      <div className='flex items-center justify-between pb-6'>
        <ThemeToggle />
        <nav className='ml-auto text-sm font-medium space-x-6'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </nav>
      </div>
    </header>
  );
}
