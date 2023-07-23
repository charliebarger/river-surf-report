import React, { PropsWithChildren } from 'react';
const PageSubHeader: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <h2 className=' underline underline-offset-2 relative text-xl sm:text-2xl font-semibold  '>{children}</h2>
  );
};

export default PageSubHeader;
