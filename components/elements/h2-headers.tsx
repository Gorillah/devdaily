import React from "react";

const H2Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="w-full inline-block font-bold capitalize text-4xl dark:text-light">
      {children}
    </h2>
  );
};

export default H2Header;
