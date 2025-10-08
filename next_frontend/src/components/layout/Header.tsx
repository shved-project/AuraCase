import {AppBar, Stack, Toolbar} from "@mui/material";
import ThemeToggle from "../ui/ThemeToggle";
import BurgerMenu from "../ui/BurgerMenu";
import Logo from "../ui/Logo";

const Header = () => {
    return (
        <AppBar position="fixed" component="header">
            <Toolbar>
                <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
                    <BurgerMenu />
                    <Stack direction="row" alignItems="center" gap={2}>
                        <ThemeToggle />
                        <Logo />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
