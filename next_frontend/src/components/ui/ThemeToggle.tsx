"use client";

import {IconButton, Tooltip, useTheme} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeStore from "@/store/themeStore";

const ThemeToggle = () => {
    const {toggleMode} = useThemeStore();
    const themeMui = useTheme();
    const isLightMode = themeMui.palette.mode === "light";

    const themeText = `Сменить на ${isLightMode ? "тёмную" : "светлую"} тему`;

    return (
        <Tooltip title={themeText} arrow>
            <IconButton
                aria-label={themeText}
                color="inherit"
                sx={{border: "1px solid", borderRadius: "5px", padding: 0.5}}
                onClick={toggleMode}
            >
                {isLightMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
