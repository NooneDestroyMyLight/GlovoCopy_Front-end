import { FC, memo } from "react";
import style from "./MainPage.module.scss";
//
import Layout from "../../templates/layout/Layout";
//
import GeneralCategory from "../../organisms/general-category/GeneralCategory";
import StoreSuggestions from "../../templates/store-suggestions/StoreSuggestions";
import {
  ESTABLISH_SUGGESTIONS_DATA,
  ESTABLISH_SUGGESTIONS_TEMPLATE,
} from "../../templates/store-suggestions/storeSuggestions.data";
import PopularCategoryCity from "../../organisms/popular-category-city/PopularCategoryCity";
import {
  POPULAR_CATEGORY_DATA,
  POPULAR_CATEGORY_TEMPLATE,
} from "../../organisms/popular-category-city/popularCategoryCity.data";

interface MainPageI {
  //   className: string;
}

const MainPage: FC<MainPageI> = ({}) => {
  return (
    <>
      <Layout>
        <GeneralCategory />
        <div className={style["suggestions-group"]}>
          <StoreSuggestions
            title={ESTABLISH_SUGGESTIONS_TEMPLATE.suggestions}
            titleIconSrc={
              "/src/assets/icons/store-suggestion/newUserRecommendationsWidgetIconLight.webp"
            }
            products={ESTABLISH_SUGGESTIONS_DATA}
          />
          <StoreSuggestions
            title={ESTABLISH_SUGGESTIONS_TEMPLATE.bestInCity}
            titleIconSrc={
              "/src/assets/icons/store-suggestion/bestInCityLight.webp"
            }
            products={ESTABLISH_SUGGESTIONS_DATA}
          />
          <PopularCategoryCity
            list={POPULAR_CATEGORY_DATA}
            template={POPULAR_CATEGORY_TEMPLATE}
            iconSrc={"/src/assets/icons/popular-category-city/cities.svg"}
          />
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
