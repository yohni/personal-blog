import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'IBM Plex Serif', serif",
    body: "'Be Vietnam Pro', sans-serif",
  },
  colors: {
    brand: {
      main: "#FF409A",
      dark: "#C438EF",
    },
  },
});

export default theme;
