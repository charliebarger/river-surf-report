import React, { PropsWithChildren } from 'react';
const PageSubHeader: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h2 className=" relative mb-10 mt-6 text-center text-2xl font-semibold after:absolute after:top-11 after:left-1/2 after:h-1.5 after:w-12 after:translate-x-[-50%] after:bg-primaryColor after:content-['']">
      {children}
    </h2>
  );
};

export default PageSubHeader;
