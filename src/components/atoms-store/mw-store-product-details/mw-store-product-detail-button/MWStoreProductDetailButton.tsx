import { FC, memo } from "react";
import style from "./MWStoreProductDetailButton.module.scss";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../constant/styles";

interface MWStoreProductDetailButtonProps {
  handler: () => void;
  //
  className: string;
  text: string;
}

const MWStoreProductDetailButton: FC<MWStoreProductDetailButtonProps> = memo(
  ({
    handler,
    //
    className,
    text,
  }) => {
    return (
      <button
        onClick={handler}
        className={`${STYLE_MW_LOCATION_BUTTON} ${className}`}
      >
        {text}
      </button>
    );
  }
);

export default MWStoreProductDetailButton;
