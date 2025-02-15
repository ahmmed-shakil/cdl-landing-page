import React from "react";
import { Outlet } from "react-router";

const ContentLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ContentLayout;
