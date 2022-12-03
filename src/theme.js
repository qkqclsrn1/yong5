import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/aldrich";
import "@fontsource/barlow";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#080705",
        color: "white",
      },
    },
  },

  fonts: {
    heading: ` "Barlow", sans-serif; `,
    body: ` "Barlow", sans-serif; `,
  },
});

export default theme;
