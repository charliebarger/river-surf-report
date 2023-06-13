import React, { PropsWithChildren } from 'react';

const PageHeader: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h1 className=" relative mt-6 mb-10 text-center text-3xl font-semibold after:absolute after:top-11 after:left-1/2 after:h-1.5 after:w-12 after:translate-x-[-50%] after:bg-primaryColor after:content-[''] lg:my-10">
      {children}
    </h1>
  );
};

export default PageHeader;
