import type { StorageLike } from "@vueuse/core";
import Cookie from "js-cookie";

import { isStr } from "~/utils/is";

export const cookieStorage = {
  getItem(key: string): string | null {
    const item = Cookie.get(key);

    if (isStr(item)) {
      return item;
    } else {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    Cookie.set(key, value);
  },
  removeItem(key: string): void {
    Cookie.remove(key);
  },
} as const satisfies StorageLike;
