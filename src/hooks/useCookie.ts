import { useState } from "react";
import Cookies, { CookieAttributes } from "js-cookie";

export function useCookie(
  key: string
): [string | undefined, (value: string, option: Cookies.CookieAttributes) => void] {
  const [item, setInnerValue] = useState<string | undefined>(() => {
    const value = Cookies.get(key);
    return value;
  });

  const setValue = (value: string, options: CookieAttributes | undefined) => {
    if (!value) {
      Cookies.remove(key);
      return;
    }
    setInnerValue(value);
    Cookies.set(key, value, options);
  };

  return [item, setValue];
}

export default useCookie;
