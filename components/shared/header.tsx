'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Home, Users, MessageCircle, Menu } from 'lucide-react';
import { UserButton, useUser } from '@stackframe/stack';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const user = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white border-b border-gray-200">
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
              />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className={`text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/')
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-2'
                    : ''
                }`}
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                href="/network"
                className={`text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/network')
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-2'
                    : ''
                }`}
              >
                <Users className="h-5 w-5 mr-1" />
                Network
              </Link>
              <Link
                href="/messages"
                className={`text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/messages')
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-2'
                    : ''
                }`}
              >
                <MessageCircle className="h-5 w-5 mr-1" />
                Messages
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <UserButton />
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
              className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Home
            </Link>
            <Link
              href="/network"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Network
            </Link>
            <Link
              href="/messages"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Messages
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <UserButton />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user?.displayName}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user?.primaryEmail}
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
              >
                Settings
              </Link>
              <Link
                href="/signout"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
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
