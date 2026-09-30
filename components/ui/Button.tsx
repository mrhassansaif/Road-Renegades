import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "outline" | "solid" | "light" | "header";

type CtaButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

const variantClass: Record<Variant, string> = {
  outline: "rr-btn rr-btn--outline",
  solid: "rr-btn rr-btn--solid",
  light: "rr-btn rr-btn--light",
  header: "rr-btn rr-btn--header",
};

export function CtaButton({
  variant = "outline",
  className = "",
  children,
  ...props
}: CtaButtonProps) {
  const classes = `${variantClass[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentProps<"button">;
  const { type = "button", ...rest } = buttonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
