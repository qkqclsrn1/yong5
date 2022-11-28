import { extendTheme } from "@chakra-ui/react";
import "@fontsource/aldrich";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#1f1f1f",
        color: "white",
      },
    },
  },

  fonts: {
    Heading: ` "Aldrich", sans-serif; `,
    body: ` "Aldrich", sans-serif; `,
  },
});

export default theme;
