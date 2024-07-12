"use clinet";

import React from "react";

const LayoutWrappers = () => {
  const rehydrateRedux = () => {
    try {
      LOCAL_STORAGE.forEach((item) => {
        const { key, reducer } = item;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default LayoutWrappers;
