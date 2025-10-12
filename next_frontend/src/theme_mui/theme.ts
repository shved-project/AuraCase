import {deepOrange, grey, lime} from "@mui/material/colors";
import {ThemeOptions} from "@mui/material/styles";
import {PaletteMode} from "@mui/material/styles";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        primary:
            mode === "light"
                ? lime
                : {
                      main: grey[900],
                      contrastText: "#fff",
                  },
        secondary: deepOrange,
    },

    typography: {
        fontFamily: "var(--font-roboto)",
    },
});

export default getDesignTokens;
