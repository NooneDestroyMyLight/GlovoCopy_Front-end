export const debounce = <F extends (...args: any[]) => any>(
  fn: F, //function
  delay: number //delay
): ((...args: Parameters<F>) => void) => {
  //
  let timeout: NodeJS.Timeout | null;
  //
  return (...args: Parameters<F>): void => {
    //
    const fnCall = (): void => fn.apply(this, args);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fnCall, delay);
  };
};
