import { FC, memo, useMemo } from "react";
import style from "./MWStoreDeliveryFee.module.scss";
//Component's
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import ModelWindow from "../../../HOC/model-window/ModelWindow";
//Style's
import { STYLE_MW_CONTENT_PHONE } from "../../../HOC/model-window/ModelWindow.style";
import {
  MW_BODY_GENREAL,
  STYLE_MW_BODY_PASSWORD,
  STYLE_MW_BODY_STORE_DELIVERY_FEE,
} from "../../tamplates-store/mw-window-body/MWWindowBody.style";
import {
  STYLE_MW_LOCATION_BUTTON,
  STYLE_MW_POSITION_LOGIN,
} from "../../../constant/styles";
//Util's
import { ITextIncertType, funTextIncert } from "../../../utils/funTextIncert";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//Tepmplate's
import {
  CART_ITEM_DATA,
  CART_ITEM_TEMPLATE,
} from "../store-cart/storeCart.data";
import { STORE_TEMPLATE } from "../../pages/store/Store.data";
import { TEMPLATE_UA_MW_STORE_DELIVERY_FEE } from "./MWStoreDeliveryFee.data";
import {
  MessageProgressBar,
  MessageProgressBarProps,
} from "../../atoms-store/store-cart-message/StoreCartMessage";
import WrapperMobileMWOverlay from "../../wrapper-components/wrapper-mobile-overley/WrapperMobileMWOverlay";

const STYLE_CUSTOM_MW_BODY = `${MW_BODY_GENREAL} ${STYLE_MW_BODY_PASSWORD} ${STYLE_MW_BODY_STORE_DELIVERY_FEE}`;

const { text_terms, text_button, text_order_cost_break_wall, text_fee, fee } =
  TEMPLATE_UA_MW_STORE_DELIVERY_FEE;

interface MWStoreDeliveryFeeProps {
  isMWOpen: boolean;
  mwToggle: () => void;
  //
  breakCredit: number;
  saveCredit: number;
  //
  totalCartCost: number;
}

const MWStoreDeliveryFee: FC<MWStoreDeliveryFeeProps> = memo(
  ({
    isMWOpen,
    mwToggle,
    //
    totalCartCost,
    //
    breakCredit,
    saveCredit,
  }) => {
    const creditBreakWall =
      utilsFormatedPrice(breakCredit) + " " + STORE_TEMPLATE.currencySymbol;

    const dataCostFee =
      utilsFormatedPrice(saveCredit) + " " + STORE_TEMPLATE.currencySymbol;

    const dataCostBreakWallCredit = funTextIncert(fee, [
      {
        component: creditBreakWall,
        order: 1,
      },
    ]);

    const installingMessageTitle: ITextIncertType[] = useMemo(
      () => [
        {
          component: (
            <strong>
              {utilsFormatedPrice(CART_ITEM_DATA.breakCredit) +
                " " +
                STORE_TEMPLATE.currencySymbol}
            </strong>
          ),
          order: 1,
        },
        {
          component: (
            <strong>
              {utilsFormatedPrice(CART_ITEM_DATA.saveCredit) +
                " " +
                STORE_TEMPLATE.currencySymbol}
            </strong>
          ),
          order: 2,
        },
      ],
      []
    );
    const messageTitle = funTextIncert(
      CART_ITEM_TEMPLATE.message,
      installingMessageTitle
    );

    const lineProgressPercentage =
      (totalCartCost / CART_ITEM_DATA.breakCredit) * 100;
    const isLineProgressComplete = lineProgressPercentage > 100;

    return (
      <ModelWindow
        toggleMW={mwToggle}
        isOpen={isMWOpen}
        // className={STYLE_MW_CONTENT_PHONE} //STYLE_MW_POSITION_LOGIN
        position={STYLE_MW_POSITION_LOGIN}
      >
        <WrapperMobileMWOverlay close={mwToggle}>
          <MWWindowBody
            className={STYLE_CUSTOM_MW_BODY} // STYLE_CUSTOM_MW_BODY
            handleCloseWindow={mwToggle}
          >
            <div className={style["mw-store-delivery-fee"]}>
              <h2 className={style["mw-store-delivery-fee__title"]}>
                {messageTitle}
              </h2>
              <div className="percentage"></div>
              <div className={style["store-delivery-fee__info"]}>
                <div className={style["message-progress-bar__wrapper"]}>
                  <MessageProgressBar
                    percentage={lineProgressPercentage}
                    isLineProgressComplete={isLineProgressComplete}
                  />
                </div>
                <table className={style["table"]}>
                  <thead>
                    <tr className={style["table__row"]}>
                      <th className={style["thead__tr"]}>
                        {text_order_cost_break_wall}
                      </th>
                      <th className={style["thead__tr"]}>{text_fee}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`${style["table__row"]} ${style["tbody"]}`}>
                      <th>{dataCostBreakWallCredit}</th>
                      <th>{dataCostFee}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={style["mw-store-delivery-fee__terms"]}>
                {text_terms}
              </div>
              <div className={style["button__wrapper"]}>
                <button
                  onClick={mwToggle}
                  className={`${STYLE_MW_LOCATION_BUTTON} ${style["button-confirm"]}`}
                >
                  {text_button}
                </button>
              </div>
            </div>
          </MWWindowBody>
        </WrapperMobileMWOverlay>
      </ModelWindow>
    );
  }
);

export default MWStoreDeliveryFee;
