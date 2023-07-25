import React, { PropsWithChildren } from 'react';

export const SectionWrapper = ({
  children,
  noPadding,
}: PropsWithChildren<{
  noPadding?: boolean;
}>) => {
  return (
    <section
      className={` m-auto my-6 ${
        noPadding ? 'px-0' : 'px-4'
      } md:px-6 lg:max-w-none xl:max-w-7xl`}
    >
      {children}
    </section>
  );
};
