import { FC, ReactNode, memo } from "react";
import style from "./Layout.module.scss";
import Header from "../../organisms/header/Header";

interface LayoutI {
  children: ReactNode;
}

const Layout: FC<LayoutI> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default Layout;
