import { FC, memo, useEffect, useMemo, useState } from "react";
import style from "./SetLocationInfo.module.scss";
import { SET_LOCATION_INFO_TEMPLATE } from "./setLocationInfo.data";
//
import MWInput from "../../../../molecules/mw-input/MWInput";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";

interface SetLocationInfoI {
  // onCloseClick?: () => void;
  onNextButtonClick?: () => void;
  register: UseFormRegister<UserLocationI>;
  errors: FieldErrors<UserLocationI>;
}

const SetLocationInfo: FC<SetLocationInfoI> = ({
  onNextButtonClick,
  register,
  errors,
}) => {
  console.log("errors", errors);

  return (
    <ul className={style["set-location-info"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {SET_LOCATION_INFO_TEMPLATE.title}
      </h2>
      <li className={style["set-location-info__fieldset"]}>
        {SET_LOCATION_INFO_TEMPLATE.fieldsPlaceholder.map(
          ({ name, fieldName, fieldOptions }, index) => {
            console.log("Erorr", errors);
            console.log(fieldName, errors[fieldName]);
            return (
              <MWInput
                placeholder={name}
                key={index}
                //
                register={register(fieldName, fieldOptions)}
                error={errors[fieldName] as FieldError}
              />
            );
          }
        )}
      </li>
      <li className={style["set-location-info__button"]}>
        <Button
          className={STYLE_MW_LOCATION_BUTTON}
          text={SET_LOCATION_INFO_TEMPLATE.button}
          // onButtonClick={onNextButtonClick}
          //
          type={"submit"}
          // isDisabled={true}
        />
      </li>
    </ul>
  );
};
export default SetLocationInfo;
