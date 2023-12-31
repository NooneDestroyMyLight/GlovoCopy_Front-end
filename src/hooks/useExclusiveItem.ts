import { useCallback, useState } from "react";
import useOnclickOutside, { Return } from "react-cool-onclickoutside";

export const useExclusiveItem = (
  idList: string[],
  initial?: string
): [string | null, (() => void)[], Return] => {
  const [isCurrent, setCurrent] = useState<string | null>(
    initial ? initial : null
  );

  const handleOpenCurrent = idList.map((item) =>
    useCallback(
      (arg = undefined) => {
        if (arg === null) setCurrent(null);
        else setCurrent(isCurrent === item ? null : item);
      },
      [isCurrent]
    )
  );

  const ref = useCallback(
    useOnclickOutside((): void => {
      setCurrent(null);
    }),
    []
  );

  return [isCurrent, handleOpenCurrent, ref];
};
