"use client";

interface ContainerProps {
  children: React.ReactNode;
}

import React, { Children } from "react";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4 "
    >
      {children}
    </div>
  );
};

export default Container;
