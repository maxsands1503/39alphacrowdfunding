'use client'

import {
    UserIcon,
    HomeIcon,
    WrenchScrewdriverIcon,
    GiftIcon,
  } from '@heroicons/react/24/outline';
import clsx from 'clsx';
  import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Dashboard', href: '/dashboard', icon: WrenchScrewdriverIcon },
    {
      name: 'Account',
      href: '/account',
      icon: UserIcon,
    },
    { name: 'Projects', href: '/projects', icon: GiftIcon },
  ];

  export default function NavLinks() {

    const pathname = usePathname();

    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-alphaorange-500 p-3 text-sm font-medium hover:bg-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-black text-white': pathname === link.href,
                },
              )}  
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
