import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-end mix-blend-difference text-paper pointer-events-none">
      <Link to="/" className="pointer-events-auto group">
        <h1 className="text-xl font-serif tracking-tighter leading-none group-hover:italic transition-all">
          M. Anh
        </h1>
      </Link>
      
      <ul className="flex gap-8 pointer-events-auto">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className={cn(
                "text-xs uppercase tracking-widest transition-opacity hover:opacity-100",
                location.pathname === item.path ? "opacity-100 underline underline-offset-4" : "opacity-60"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
