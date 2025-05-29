export const env = {
  get DEV() {
    return import.meta.env.MODE === "development";
  },
  get BASE_URL() {
    return import.meta.env.BASE_URL;
  },
};
