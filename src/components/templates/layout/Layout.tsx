import { FC, ReactNode, memo } from "react";
import style from "./Layout.module.scss";

import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutI {
  children: ReactNode;
}

const Layout: FC<LayoutI> = memo(({ children }) => {
  return (
    <>
      <Header />
      <div className={style["layout"]}>{children}</div>
      {/* <Footer /> */}
    </>
  );
});

export default Layout;
