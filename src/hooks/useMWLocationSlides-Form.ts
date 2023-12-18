import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormResetField,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from "react-hook-form";
import {
  UserConfirmedLocationI,
  UserLocationEntries,
  UserLocationI,
} from "../types/IUserLocation";
import { useCallback } from "react";

let userConfirmedLocation: UserConfirmedLocationI;

interface UseMWLocationSlidesFormReturnI {
  register: UseFormRegister<UserLocationI>;
  resetField: UseFormResetField<UserLocationI>;
  setValue: UseFormSetValue<UserLocationI>;
  reset: UseFormReset<UserLocationI>;
  trigger: UseFormTrigger<UserLocationI>;
  isValid: boolean;
  errors: FieldErrors<UserLocationI>;
  //
  handleGeolocationConfirm: (address: string) => void;
  handleAutocompleteConfirm: (
    address: string,
    coordinate: google.maps.LatLngLiteral
  ) => void;
  //
  handleSubmit: UseFormHandleSubmit<UserLocationI, undefined>;
  onSubmit: SubmitHandler<UserLocationI>;
  //
  userConfirmedLocation: UserConfirmedLocationI;
}

export const useMWLocationSlidesForm = (
  setCurrentUserAddress: React.Dispatch<React.SetStateAction<string>>,
  handleCloseMW: () => void,
  //
  currentPage: number,
  moveToNextPage: (() => void)[]
): UseMWLocationSlidesFormReturnI => {
  const {
    register,
    trigger,
    setValue,
    getValues,
    handleSubmit,
    watch,
    resetField,
    reset,
    formState: { errors, isValid },
  } = useForm<UserLocationI>({ mode: "onChange" });

  const onSubmit: SubmitHandler<UserLocationI> = (data) => {
    // if (currentPage === 0) moveToNextPage[1]();
    if (currentPage === 1) {
      userConfirmedLocation = {
        address: data.address,
        description: data.description,
        coordinate: data.coordinate,
      };
      setCurrentUserAddress?.(data.address);
      reset();
      handleCloseMW?.();
    }

    if (currentPage === 2 && getValues("street") && getValues("streetNumber"))
      moveToNextPage[3]();

    if (currentPage === 3) {
      let userLocationEntr = Object.entries(data) as UserLocationEntries;
      const deletedProp: (keyof UserLocationI)[] = [
        "description",
        "coordinate",
      ];

      console.log(data);

      const userStringAddress = userLocationEntr
        .reduce((total: string[], item) => {
          if (
            !deletedProp.includes(item[0] as keyof UserLocationI) &&
            item[1] &&
            typeof item[1] === "string"
          )
            total.push(item[1]);
          return total;
        }, [] as string[])
        .join(", ");

      userConfirmedLocation = {
        address: userStringAddress,
        description: data.description,
        coordinate: data.coordinate,
      };
      moveToNextPage[4]();
    }
    //
    if (currentPage === 4) {
      setCurrentUserAddress?.(userConfirmedLocation.address);
      reset();
      handleCloseMW?.();
    }
  };

  const handleGeolocationConfirm = useCallback(
    (address: string) => {
      setCurrentUserAddress?.(address);
      reset();
      handleCloseMW?.();
    },
    [setCurrentUserAddress]
  );

  const handleAutocompleteConfirm = useCallback(
    (address: string, coordinate: google.maps.LatLngLiteral) => {
      setValue("address", address);
      setValue("coordinate", coordinate);
    },
    []
  );

  return {
    register: register,
    resetField: resetField,
    setValue: setValue,
    reset: reset,
    trigger: trigger,

    isValid: isValid,
    errors: errors,
    //
    handleGeolocationConfirm: handleGeolocationConfirm,
    handleAutocompleteConfirm: handleAutocompleteConfirm,
    //
    handleSubmit,
    onSubmit,
    //
    userConfirmedLocation,
  };
};
