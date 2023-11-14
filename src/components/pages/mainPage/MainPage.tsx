import { FC } from "react";
import style from "./MainPage.module.scss";
import Layaout from "../../templates/layaout/Layaout";

interface MainPageI {
  //   className: string;
}

const MainPage: FC<MainPageI> = ({}) => {
  return (
    <>
      <Layaout />
    </>
  );
};

export default MainPage;
