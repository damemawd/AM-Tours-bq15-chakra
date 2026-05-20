import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#fff8f0" },
          100: { value: "#ffecd6" },
          200: { value: "#ffd4a8" },
          300: { value: "#ffb870" },
          400: { value: "#ff9a3d" },
          500: { value: "#f07c1c" },
          600: { value: "#d46212" },
          700: { value: "#a84a0e" },
          800: { value: "#7c370d" },
          900: { value: "#5c2a0d" },
          950: { value: "#331405" },
        },
        accent: {
          50: { value: "#effcf9" },
          100: { value: "#c8f7ec" },
          200: { value: "#96eedb" },
          300: { value: "#5cdec6" },
          400: { value: "#2ec4ab" },
          500: { value: "#18a892" },
          600: { value: "#108777" },
          700: { value: "#116c61" },
          800: { value: "#12564f" },
          900: { value: "#134842" },
          950: { value: "#052b28" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: { base: "{colors.brand.700}", _dark: "{colors.brand.300}" } },
          muted: { value: { base: "{colors.brand.100}", _dark: "{colors.brand.900}" } },
          subtle: { value: { base: "{colors.brand.50}", _dark: "{colors.brand.950}" } },
          emphasized: { value: { base: "{colors.brand.200}", _dark: "{colors.brand.800}" } },
          focusRing: { value: "{colors.brand.500}" },
        },
        accent: {
          solid: { value: "{colors.accent.500}" },
          contrast: { value: "white" },
          fg: { value: { base: "{colors.accent.700}", _dark: "{colors.accent.300}" } },
          muted: { value: { base: "{colors.accent.100}", _dark: "{colors.accent.900}" } },
          subtle: { value: { base: "{colors.accent.50}", _dark: "{colors.accent.950}" } },
          emphasized: { value: { base: "{colors.accent.200}", _dark: "{colors.accent.800}" } },
          focusRing: { value: "{colors.accent.500}" },
        },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      overflowX: "hidden",
    },
  },
})

export const system = createSystem(defaultConfig, config)
