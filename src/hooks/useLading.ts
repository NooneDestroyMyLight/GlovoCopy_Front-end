import { useState } from "react";

export const useLoading = (): [boolean, () => void] => {
  const [isLoading, setLoading] = useState(false);

  const toggle = () => setLoading(!isLoading);

  return [isLoading, toggle];
};
