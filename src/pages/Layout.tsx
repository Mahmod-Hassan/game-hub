import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <Box padding={5}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
