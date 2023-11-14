import { FC, memo } from "react";
import style from "./Layout.module.scss";
import Header from "../../organisms/header/Header";

const Layaout: FC = memo(({}) => {
  return (
    <>
      <Header />
    </>
  );
});

export default Layaout;
