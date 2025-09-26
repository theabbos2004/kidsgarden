import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};
export default Layout;
