import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
