import {AppBar, Toolbar} from "@mui/material";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderSpacer from "./HeaderSpacer";

const Header = () => {
    return (
        <>
            <AppBar position="fixed" component="header" id="main-header">
                <Toolbar>
                    <HeaderMobileMenu />
                    <HeaderDesktopMenu />
                </Toolbar>
            </AppBar>
            <HeaderSpacer />
        </>
    );
};

export default Header;
