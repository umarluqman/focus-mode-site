import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      "100": "#fafbfe",
      "200": "#dae1fb",
      "300": "#bac6f7",
      "400": "#889df2",
      "500": "#4364ea",
      "600": "#3e60ea",
      "700": "#3055e8",
      "800": "#2c51e8",
      "900": "#1942e6",
      // "accent-600": "#183ed8",
      // "accent-700": "#122ea1",
      // "accent-800": "#0b1d65",
      // "accent-900": "#050d2e",
      // "accent-600": "#1d43d7",
      // "accent-700": "#1a35a3",
      // "accent-800": "#14256c",
      // "accent-900": "#0d163b",
      "accent-600": "#1f43d6",
      "accent-700": "#1d379f",
      "accent-800": "#172768",
      "accent-900": "#0f1738",
    },
    dark: {
      "200": "#374862",
      "900": "#111827",
    },
  },
});

export default theme;
