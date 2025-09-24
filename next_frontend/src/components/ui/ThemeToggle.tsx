"use client";

import {IconButton, Tooltip} from "@mui/material";
import {useState} from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const themeText = `Сменить на ${theme === "light" ? "тёмную" : "светлую"} тему`;

    const handleToggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };

    return (
        <Tooltip title={themeText} arrow>
            <IconButton
                aria-label={themeText}
                color="inherit"
                sx={{border: "1px solid", borderRadius: "5px", padding: 0.5}}
                onClick={handleToggleTheme}
            >
                {theme === "light" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
