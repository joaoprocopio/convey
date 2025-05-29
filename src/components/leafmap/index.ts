import { defineAsyncComponent } from "vue";

export const Leafmap = defineAsyncComponent(async () => {
  return import("./Leafmap.vue");
});
