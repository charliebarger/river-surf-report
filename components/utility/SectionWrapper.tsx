import React, { PropsWithChildren } from "react";

export const SectionWrapper: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <section className=" my-10  px-5 m-auto lg:max-w-none xl:max-w-7xl">
      {children}
    </section>
  );
};
