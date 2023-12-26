import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../redux/Store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
