import React, { PropsWithChildren } from 'react';

export const SectionWrapper: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <section className=' m-auto  my-6 px-5 lg:max-w-none xl:max-w-7xl'>
      {children}
    </section>
  );
};
