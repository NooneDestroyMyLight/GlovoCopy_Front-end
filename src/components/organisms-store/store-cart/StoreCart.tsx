import { FC, memo, useCallback, useState } from "react";
import style from "./StoreCart.module.scss";
import { CART_ITEM_TEMPLATE, STORE_CART_TEMPLATE } from "./storeCart.data";
import { ICartProduct } from "../../../types/IProductCart";
import { utilsFormatedPrice } from "../../../utils/formatedPrice";
//
import StoreCartPlaceholder from "../../../assets/icons-store-page/store-cart-placeholder/StoreCartPlaceholder";
import StoreCartPlaceholderClosed from "../../../assets/icons-store-page/store-cart-placeholder-closed/StoreCartPlaceholderClosed";
import { STYLE_MW_LOCATION_BUTTON } from "../../../constant/styles";
import { getFinalPrice } from "../../../utils/getFinalPrice";
import { useToggle } from "../../../hooks/useToggle";
import ModelWindow from "../../../HOC/model-window/ModelWindow";
import MWWindowBody from "../../tamplates-store/mw-window-body/MWWindowBody";
import MWStoreProductDetailExtend from "../../tamplates-store/mw-store-product-detail--extend/MWStoreProductDetailExtend";
import { MW_BODY_EXTENDED } from "../../tamplates-store/mw-window-body/MWWindowBody.style";
import StoreCartMessage from "../../atoms-store/store-cart-message/StoreCartMessage";
import CartItem from "../../atoms-store/store-cart-item/StoreCartItem";

interface MWLocalComponentProductDetailProps {
  product: ICartProduct;
  handlerMWToggle: () => void;
  isMWOpen: boolean;
}
const MWLocalComponentProductDetail: FC<MWLocalComponentProductDetailProps> = ({
  product,
  handlerMWToggle,
  isMWOpen,
}) => {
  return (
    <ModelWindow toggleMW={handlerMWToggle} isOpen={isMWOpen}>
      <MWWindowBody
        className={MW_BODY_EXTENDED}
        handleCloseWindow={handlerMWToggle}
      >
        <MWStoreProductDetailExtend
          product={product}
          toggleMW={handlerMWToggle}
          //
          editableProduct={product}
          key={product.id}
        />
      </MWWindowBody>
    </ModelWindow>
  );
};

interface StoreCartProps {
  isClosed: boolean;
  cartItems: ICartProduct[];
}

const StoreCart: FC<StoreCartProps> = memo(({ cartItems, isClosed }) => {
  const [mWProduct, setMWProduct] = useState<ICartProduct | null>(null);
  const [isMwOpen, mwToggle] = useToggle(false);

  const totalProductCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const totalCartCost = cartItems.reduce(
    (total: number, { price, discountPrice, count, customizations }) =>
      (total += getFinalPrice(
        price,
        count,
        discountPrice,
        customizations?.reduce((total, item) => (total += item.price), 0)
      )),
    0
  );

  const handlerToggle = useCallback(
    (product: ICartProduct) => {
      setMWProduct(product);
      mwToggle();
    },
    [setMWProduct]
  );
  return (
    <div className={style["store-cart"]}>
      <h2 className={style["store-cart__title"]}>
        {STORE_CART_TEMPLATE.title}
      </h2>
      <div className={style["store-cart__placeholder"]}>
        {isClosed && <StoreCartPlaceholderClosed />}
        {!cartItems.length && <StoreCartPlaceholder />}
        {cartItems.length > 0 && (
          <div className={style["cart-items-list__wrapper"]}>
            <div className={style["cart-items-list"]}>
              {cartItems.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  mwToggle={handlerToggle}
                />
              ))}
            </div>
          </div>
        )}
        {isClosed && (
          <p className={style["store-cart__placeholder__text"]}>
            {STORE_CART_TEMPLATE.isClosedCartText}
          </p>
        )}
        {!cartItems.length && !isClosed && (
          <p className={style["store-cart__placeholder__text"]}>
            {STORE_CART_TEMPLATE.emptyCartText}
          </p>
        )}
      </div>
      <StoreCartMessage totalCartCost={totalCartCost} />
      {cartItems.length > 0 && (
        <div
          className={`${style["confirm-order-button__wrapper"]} ${style["padding"]}`}
        >
          <button
            className={`${STYLE_MW_LOCATION_BUTTON} ${style["confirm-order-button"]}`}
          >
            {`${
              CART_ITEM_TEMPLATE.buttonText
            } (${totalProductCount}) за ${utilsFormatedPrice(totalCartCost)} ${
              CART_ITEM_TEMPLATE.currency
            }`}
          </button>
        </div>
      )}
      {mWProduct && (
        <MWLocalComponentProductDetail
          handlerMWToggle={mwToggle}
          isMWOpen={isMwOpen}
          product={mWProduct}
        />
      )}
      {/*add costomizatation*/}
    </div>
  );
});
export default StoreCart;
