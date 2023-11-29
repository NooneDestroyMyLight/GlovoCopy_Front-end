import { FC, useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import style from "./GeneralCategory.module.scss";
import DropdownBlack, {
  DD_ICON_MEDIUM,
} from "../../../assets/icons/dropdown-black/DropdownBlack";
import { GENERAL_CATEGORY_DATA } from "./general-category.data";
import { HEADER_USER_ADDRESS_DATA } from "../../molecules/header-user-adress/HeaderUserAddress";
import GeneralCategoryItem from "../../molecules/general-category-item/GeneralCategoryItem";
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import { STYLE_MW_SET_ADDRESS_SIZE } from "../../../constant/styles";
import MWLocationPages from "../../templates/mw-location-pages/MWLocationPages";

const ADDRESS = "Доставка за адресою: ";

interface GeneralCategoryI {
  //   className: string;
}

const GeneralCategory: FC<GeneralCategoryI> = ({}) => {
  const [isOpen, toggleMW] = useToggle(false);
  const [userCurrentAddress, setUserCurrentAddress] = useState(
    HEADER_USER_ADDRESS_DATA
  );

  return (
    <>
      <section className={style["general-category"]}>
        <div className={style["general-category__address"]}>
          <p>{ADDRESS}</p>
          <button onClick={toggleMW} className={style["current-address"]}>
            <p>{userCurrentAddress}</p>
            <DropdownBlack className={DD_ICON_MEDIUM} />
          </button>
        </div>
        <ul className={style["general-category__list"]}>
          {GENERAL_CATEGORY_DATA.map((item) => (
            <GeneralCategoryItem
              title={item.title}
              src={item.src}
              //
              position={item.position}
              key={item.src}
            />
          ))}
        </ul>
      </section>
      <img
        src="/public/curve-main--desktop.svg"
        alt=""
        className={style["custom-border__desktop"]}
      />
      <img
        src="/public/curve-main--mobile.svg"
        alt=""
        className={style["custom-border__mobile"]}
      />
      <ModelWindow
        isOpen={isOpen}
        toggleMW={toggleMW}
        position={STYLE_MW_SET_ADDRESS_SIZE}
      >
        <MWLocationPages
          setCurrentUserAddress={setUserCurrentAddress}
          onCloseClick={toggleMW}
        />
      </ModelWindow>
    </>
  );
};

export default GeneralCategory;
