import { FC, memo } from "react";
import style from "./MainPage.module.scss";
//
import Layout from "../../templates/layout/Layout";
import GeneralCategory from "../../organisms/general-category/GeneralCategory";

interface MainPageI {
  //   className: string;
}

const MainPage: FC<MainPageI> = ({}) => {
  return (
    <>
      <Layout>
        <GeneralCategory />
      </Layout>
    </>
  );
};

export default MainPage;
