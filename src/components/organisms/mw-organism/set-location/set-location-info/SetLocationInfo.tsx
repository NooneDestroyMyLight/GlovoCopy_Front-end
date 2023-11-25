import { FC, useCallback, useEffect, useMemo } from "react";
import style from "./SetLocationInfo.module.scss";
import { SET_LOCATION_INFO_TEMPLATE } from "./setLocationInfo.data";
//
import MWInput from "../../../../molecules/mw-input/MWInput";
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  UseFormTrigger,
} from "react-hook-form";
import { UserLocationI } from "../../../../../types/UserLocation";
//
import Button from "../../../../atoms/button/Button";
import { STYLE_MW_LOCATION_BUTTON } from "../../../../../constant/styles";

interface SetLocationInfoI {
  onNextButtonClick?: () => void;
  //
  register: UseFormRegister<UserLocationI>;
  trigger: UseFormTrigger<UserLocationI>;
  resetField: UseFormResetField<UserLocationI>;
  errors: FieldErrors<UserLocationI>;
  isValid: boolean;
}

const SetLocationInfo: FC<SetLocationInfoI> = ({
  onNextButtonClick,
  register,
  trigger,
  resetField,
  //
  errors,
  isValid,
}) => {
  useEffect(() => {
    trigger();
  }, []);

  return (
    <ul className={style["set-location-info"]}>
      <h2 className={`${style["mw-location-title"]} ${style["title"]}`}>
        {SET_LOCATION_INFO_TEMPLATE.title}
      </h2>
      <li className={style["set-location-info__fieldset"]}>
        {SET_LOCATION_INFO_TEMPLATE.fieldsPlaceholder.map(
          ({ name, fieldName, fieldOptions }, index) => {
            //Rerender single input START
            const reg = useMemo(
              () => register(fieldName, fieldOptions),
              [register]
            );
            const error = useMemo(() => errors[fieldName], [errors[fieldName]]);
            const resetFieldCallBack = useCallback(() => {
              resetField(fieldName);
              trigger(fieldName);
            }, []);
            //Rerender single input END
            return (
              <MWInput
                placeholder={name}
                key={index}
                //
                register={reg}
                error={error as FieldError}
                resetField={resetFieldCallBack}
              />
            );
          }
        )}
      </li>
      <li className={style["set-location-info__button"]}>
        <Button
          className={STYLE_MW_LOCATION_BUTTON}
          text={SET_LOCATION_INFO_TEMPLATE.button}
          type={"submit"}
          isDisabled={!isValid}
        />
      </li>
    </ul>
  );
};
export default SetLocationInfo;
