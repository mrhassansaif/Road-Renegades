/**
 * Design tokens extracted from the original Astra + Elementor scrape.
 * Source: index.html inline Astra CSS + elementor post-17.css
 * Do not invent values — extend from these when adjusting UI.
 */
export const designTokens = {
  color: {
    accent: "#b6e925", // --ast-global-color-0 / 1
    white: "#ffffff", // --ast-global-color-2
    muted: "#d8d8d8", // --ast-global-color-3
    surface: "#0f0f0f", // --ast-global-color-4 / 5
    void: "#080808", // --ast-global-color-6
    glass: "rgba(255, 255, 255, 0.2)", // --ast-global-color-7
    soft: "rgba(255, 255, 255, 0.75)", // --ast-global-color-8
    border: "#dddddd", // --ast-border-color (generic)
  },
  font: {
    display: '"Oswald", sans-serif',
    body: '"Roboto", sans-serif',
  },
  type: {
    body: { size: "16px", weight: 400, lineHeight: 1.6 },
    bodyMobile: { size: "15px" },
    h1: { desktop: "80px", tablet: "72px", mobile: "40px", lineHeight: 1.1, weight: 700 },
    h2: { desktop: "40px", tablet: "32px", mobile: "26px", lineHeight: 1.1, weight: 700 },
    h3: { desktop: "32px", tablet: "28px", mobile: "24px", weight: 700 },
    h4: { desktop: "24px", tablet: "22px", mobile: "20px", lineHeight: 1.2, weight: 700 },
    h5: { desktop: "18px", tablet: "17px", mobile: "16px", lineHeight: 1.2, weight: 700 },
    h6: { desktop: "12px", tablet: "12px", mobile: "12px", lineHeight: 1.25, weight: 700 },
    button: {
      size: "14px",
      weight: 400,
      lineHeight: "1em",
      letterSpacing: "2px",
      transform: "uppercase" as const,
    },
    headerButton: {
      size: "13px",
      weight: 700,
      lineHeight: "1em",
      letterSpacing: "0",
      transform: "uppercase" as const,
    },
    eyebrow: {
      size: "12px",
      weight: 700,
      letterSpacing: "2px",
      transform: "uppercase" as const,
      lineHeight: "4em",
    },
    nav: {
      color: "rgba(255, 255, 255, 0.75)",
      active: "#ffffff",
      hover: "#b6e925",
    },
  },
  layout: {
    container: "1200px",
    containerPaddingX: "40px",
    containerPaddingXMobile: "20px",
    headerMinHeight: "70px",
    headerMenuLineHeight: "70px",
    footerPrimaryPadding: "50px 30px 30px",
    footerPrimaryPaddingMobile: "40px 20px 20px",
    footerBelowMinHeight: "80px",
    footerBelowPadding: "20px 0",
    footerColumns: "1fr 1fr 1fr 2fr",
  },
  button: {
    borderWidth: "2px",
    radius: "0",
    padding: "14px 38px",
    paddingTablet: "16px 24px",
    paddingMobile: "14px 20px",
    headerPadding: "12px 24px",
  },
  section: {
    /** Common Elementor section vertical paddings from post-17.css */
    heroY: "320px",
    heroYTablet: "128px",
    heroYMobile: "200px",
    lg: "104px",
    md: "80px",
    sm: "64px",
    xs: "40px",
  },
  breakpoint: {
    /** Astra header break / tablet */
    tablet: "921px",
    mobile: "544px",
  },
  radius: {
    none: "0",
  },
  shadow: {
    none: "none",
  },
  overlay: {
    heroOpacity: 0.35,
  },
} as const;
