import React, { useEffect, useState } from "react";

import { ComponentShield } from "next-shield";
import NotAuthorized from "@/components/NotAuthorized/NotAuthorized";

const DashboardLayoutWrappers = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    checkUserRole();
  }, []);

  const checkUserRole = () => {
    try {
      setTimeout(() => {
        setShowDashboard(true);
        setIsLoading(false);
        toast.success("Access granted", { id: toastID });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <Spinner size={50} showText customText="Checking user permissions..." /> */}
        Checking user permissions...
      </div>
    );
  }

  return (
    <div>
      <ComponentShield showIf={showDashboard} fallback={<NotAuthorized />}>
        {children}
      </ComponentShield>
    </div>
  );
};

export default DashboardLayoutWrappers;
