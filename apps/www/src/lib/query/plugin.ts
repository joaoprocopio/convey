import type { VueQueryPluginOptions } from "@tanstack/vue-query";
import { VueQueryPlugin as __query } from "@tanstack/vue-query";
import type { Plugin } from "vue";

import { queryClient } from "./client";

export const query: Plugin = {
  install(app) {
    const config: VueQueryPluginOptions = {
      queryClient: queryClient,
    };

    app.use(__query, config);
  },
};
