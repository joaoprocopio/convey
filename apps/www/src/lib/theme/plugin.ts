import {
  type FunctionPlugin,
  type InjectionKey,
  type Ref,
  ref,
  watch,
} from "vue";

import { PrefersDarkColorScheme, Theme, type TTHeme } from "./constants";
import { applyTheme } from "./dom";

export const themeKey = Symbol() as InjectionKey<Ref<TTHeme>>;

export const theme: FunctionPlugin = async (app) => {
  const theme = ref<TTHeme>(Theme.System);
  const media = window.matchMedia(PrefersDarkColorScheme);

  watch(theme, (nextTheme) => applyTheme(nextTheme, media), {
    immediate: true,
  });

  media.addEventListener("change", () => applyTheme(theme.value, media));

  app.provide(themeKey, theme);
};
