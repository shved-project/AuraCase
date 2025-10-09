"use client";

import BurgerMenu from "@/components/ui/BurgerMenu";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {Stack, useMediaQuery} from "@mui/material";

const HeaderMobileMenu = () => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    if (isDesktop) {
        return null;
    }

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" flexGrow={1}>
            <BurgerMenu />
            <Stack direction="row" alignItems="center" gap={2}>
                <ThemeToggle />
                <Logo />
            </Stack>
        </Stack>
    );
};

export default HeaderMobileMenu;
