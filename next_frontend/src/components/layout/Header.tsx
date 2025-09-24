import {AppBar, Box, Stack, Toolbar, Typography} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import BurgerMenu from "../ui/BurgerMenu";

const Header = () => {
    return (
        <AppBar position="fixed" component="header">
            <Toolbar>
                <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
                    <BurgerMenu />
                    <Stack direction="row" alignItems="center" gap={2}>
                        <ThemeToggle />
                        <Link href="/">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        border: "1px solid",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "25px",
                                        aspectRatio: "1/1",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <PhoneAndroidIcon sx={{transform: "rotate(-30deg)", fontSize: "15px"}} />
                                </Box>
                                <Typography sx={{fontSize: "10px"}}>AuraCase</Typography>
                            </Box>
                        </Link>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
