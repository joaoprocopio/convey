import { cva, type VariantProps } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-md border font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "rounded-none border-transparent !p-0",
      },
      size: {
        default: "gap-2 px-2 py-1 text-xs [&>svg]:size-4",
        lg: "gap-2.5 px-3 py-1.5 text-sm [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
export type BadgeVariants = VariantProps<typeof badgeVariants>;
