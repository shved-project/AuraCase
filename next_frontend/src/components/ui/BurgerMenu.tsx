"use client";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useState} from "react";
import Link from "next/link";
import NAV_MENU from "@/constants/nav_menu";

const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu((open) => !open);
    };

    return (
        <>
            <IconButton aria-label="открыть меню" color="inherit" onClick={handleOpenMenu}>
                <MenuIcon fontSize="medium" />
            </IconButton>
            <Drawer
                open={openMenu}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "100%",
                    },
                }}
            >
                <nav style={{height: "100%"}}>
                    <Stack justifyContent="space-between" height="inherit">
                        <Box>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent={isAuth ? "space-between" : "flex-start"}
                                sx={{paddingInline: 2, paddingBlock: 1, mb: 1}}
                            >
                                <IconButton onClick={handleOpenMenu}>
                                    <CloseIcon fontSize="large" />
                                </IconButton>
                                {isAuth && (
                                    <Link href="/profile/user">
                                        <IconButton onClick={handleOpenMenu}>
                                            <AccountCircleIcon fontSize="large" />
                                        </IconButton>
                                    </Link>
                                )}
                            </Stack>
                            <List>
                                {NAV_MENU.map((item) => (
                                    <ListItem disablePadding key={item.id}>
                                        {item.type === "simple" ? (
                                            <Link href={item.path} style={{width: "100%"}} onClick={handleOpenMenu}>
                                                <ListItemButton>
                                                    <ListItemIcon sx={{minWidth: "35px"}}>
                                                        <item.icon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.label} />
                                                </ListItemButton>
                                            </Link>
                                        ) : (
                                            <ListItemButton>
                                                <Accordion
                                                    sx={{
                                                        width: "100%",
                                                        background: "none",
                                                        boxShadow: "none",
                                                    }}
                                                >
                                                    <AccordionSummary
                                                        expandIcon={<KeyboardArrowDownIcon />}
                                                        sx={{
                                                            padding: 0,
                                                            minHeight: "auto",
                                                            "& .MuiAccordionSummary-content": {
                                                                margin: 0,
                                                                alignItems: "center",
                                                            },
                                                            "&.Mui-expanded": {
                                                                minHeight: "auto",
                                                            },
                                                        }}
                                                    >
                                                        <ListItemIcon sx={{minWidth: "35px"}}>
                                                            <item.icon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.label} />
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{padding: 0}}>
                                                        <List>
                                                            {item.categories.map((item) => (
                                                                <ListItem disablePadding key={item.id}>
                                                                    <Link
                                                                        href={item.path}
                                                                        style={{width: "100%"}}
                                                                        onClick={handleOpenMenu}
                                                                    >
                                                                        <ListItemButton>
                                                                            <ListItemIcon sx={{minWidth: "35px"}}>
                                                                                <item.icon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary={item.label} />
                                                                        </ListItemButton>
                                                                    </Link>
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </ListItemButton>
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        {!isAuth && (
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{paddingBlock: 1, paddingInline: 2}}
                            >
                                <Link href="/register" onClick={handleOpenMenu}>
                                    <Typography color="primary" sx={{textDecoration: "underline"}}>
                                        Регистрация
                                    </Typography>
                                </Link>
                                <Link href="/login" onClick={handleOpenMenu}>
                                    <Button variant="contained">Войти</Button>
                                </Link>
                            </Stack>
                        )}
                    </Stack>
                </nav>
            </Drawer>
        </>
    );
};

export default BurgerMenu;
