export const Theme = {
  System: "system",
  Light: "light",
  Dark: "dark",
} as const;

export type TTHeme = (typeof Theme)[keyof typeof Theme];

export const PrefersDarkColorScheme = "(prefers-color-scheme: dark)" as const;
