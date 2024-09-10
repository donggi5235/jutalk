import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto px-[10px] py-[20px] lg:px-[100px]">{children}</div>;
};

export default PageLayout;