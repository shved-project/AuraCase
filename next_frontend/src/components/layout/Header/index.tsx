import {AppBar, Toolbar} from "@mui/material";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";

const Header = () => {
    return (
        <AppBar position="fixed" component="header">
            <Toolbar>
                <HeaderMobileMenu />
                <HeaderDesktopMenu />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
