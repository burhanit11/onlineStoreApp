import Navabr from "@/components/Sidebar/Navabr";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    // <div className="flex">
    //   {/* sidebar */}

    //   <Sidebar />
    //   {/* main body */}
    //   <div className=" w-full">
    //     {/* Header */}
    //     <Navabr />
    //     {/* main */}
    //     <div>{children}</div>
    //   </div>
    // </div>
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Sidebar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Navabr />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
