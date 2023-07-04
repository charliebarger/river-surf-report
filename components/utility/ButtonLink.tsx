import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

const ButtonLink = ({
  children,
  href,
  extraClasses,
  ariaLabel,
}: PropsWithChildren<{
  href: string;
  extraClasses: string;
  ariaLabel?: string;
}>) => {
  return (
    <Link
      {...(ariaLabel && {
        'aria-label': ariaLabel,
      })}
      href={href}
      className={`rounded-full border-2 border-[#089f85] bg-[#089f85] px-4 py-1 text-sm font-bold text-white hover:bg-white hover:text-[#089f85] ${extraClasses} `}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
