'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  Home,
  Users,
  MessageCircle,
  Menu,
  Sun,
  Moon,
} from 'lucide-react';
import { UserButton, useUser } from '@stackframe/stack';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const Header = () => {
  const user = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">SocialApp</span>
              <Image
                src={'/icon.png'}
                width={96}
                height={48}
                alt="Fanfare Logo"
                className="dark:invert"
              />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/')
                    ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-2'
                    : ''
                }`}
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                href="/network"
                className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/network')
                    ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-2'
                    : ''
                }`}
              >
                <Users className="h-5 w-5 mr-1" />
                Network
              </Link>
              <Link
                href="/messages"
                className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/messages')
                    ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-2'
                    : ''
                }`}
              >
                <MessageCircle className="h-5 w-5 mr-1" />
                Messages
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <button className="p-1 rounded-full text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <UserButton
              extraItems={[
                {
                  text: 'Light Mode',
                  icon: <Sun />,
                  onClick: () => setTheme('light'),
                },
                {
                  text: 'Dark mode',
                  icon: <Moon />,
                  onClick: () => setTheme('dark'),
                },
              ]}
            />
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`${
                isActive('/')
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-500 text-blue-700 dark:text-blue-300'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
            >
              Home
            </Link>
            <Link
              href="/network"
              className={`${
                isActive('/network')
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-500 text-blue-700 dark:text-blue-300'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
            >
              Network
            </Link>
            <Link
              href="/messages"
              className={`${
                isActive('/messages')
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-500 text-blue-700 dark:text-blue-300'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
            >
              Messages
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <UserButton
                  extraItems={[
                    {
                      text: 'Light Mode',
                      icon: <Sun />,
                      onClick: () => setTheme('light'),
                    },
                    {
                      text: 'Dark mode',
                      icon: <Moon />,
                      onClick: () => setTheme('dark'),
                    },
                  ]}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800 dark:text-white">
                  {user?.displayName}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {user?.primaryEmail}
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 sm:px-6"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 sm:px-6"
              >
                Settings
              </Link>
              <Link
                href="/signout"
                className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 sm:px-6"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
