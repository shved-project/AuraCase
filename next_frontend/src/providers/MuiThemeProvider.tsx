"use client";

import useThemeStore from "@/store/themeStore";
import getDesignTokens from "@/theme_mui/theme";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ReactNode, useMemo} from "react";

interface Props {
    children: ReactNode;
}

const MuiThemeProvider = ({children}: Props) => {
    const mode = useThemeStore((state) => state.mode);

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default MuiThemeProvider;
