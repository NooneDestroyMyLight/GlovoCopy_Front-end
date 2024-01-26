import { FC, memo } from "react";
import style from "./MWStoreProductDetailButton.module.scss";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../constant/styles";

interface MWStoreProductDetailButtonProps {
  handler: () => void;
  //
  className: string;
  text: string;
  disabled?: boolean;
}

const MWStoreProductDetailButton: FC<MWStoreProductDetailButtonProps> = memo(
  ({
    handler,
    //
    className,
    text,
    disabled,
  }) => {
    return (
      <button
        onClick={handler}
        className={`${STYLE_MW_LOCATION_BUTTON} ${className} `}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
);

export default MWStoreProductDetailButton;
