"use client";

import Logo from "@/components/ui/Logo";
import {Badge, Box, Button, IconButton, Menu, MenuItem, Stack, useMediaQuery} from "@mui/material";
import Link from "next/link";
import {useState} from "react";
import NAV_MENU, {CategoryNavItem} from "@/constants/nav_menu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderDesktopMenu = () => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    const [isAuth, setIsAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const products = NAV_MENU.find(
        (item): item is CategoryNavItem => item.label === "Товары" && item.type === "category"
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!isDesktop) {
        return null;
    }

    return (
        <nav style={{flexGrow: 1}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={3}>
                    <Logo />
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/">Главная</Link>
                        </li>
                        <li>
                            <button type="button" className="flex items-end gap-1 cursor-pointer" onClick={handleClick}>
                                Товары
                                <KeyboardArrowDownIcon
                                    fontSize="small"
                                    className={`!transition-transform duration-150 ease-out ${open ? "rotate-180" : "rotate-0"}`}
                                />
                            </button>
                            <Menu
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                disableScrollLock={true}
                                sx={{marginTop: "30px"}}
                            >
                                {products?.categories.map((item) => (
                                    <MenuItem sx={{padding: 0}} key={item.id}>
                                        <Link href={item.path} className="block grow-1 px-5 py-2">
                                            {item.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </li>
                        <li>
                            <Link href="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={5}>
                    <Box sx={{display: "flex", alignItems: "center", gap: 0.2}}>
                        <Link href="/favorites">
                            <IconButton color="inherit" sx={{padding: 0.8}}>
                                <FavoriteIcon />
                            </IconButton>
                        </Link>
                        <Link href="/cart">
                            <IconButton color="inherit" sx={{padding: 0.8}}>
                                <Badge
                                    badgeContent={1}
                                    color="secondary"
                                    sx={{
                                        ".MuiBadge-badge": {
                                            height: "15px",
                                            minWidth: "15px",
                                            aspectRatio: "1 / 1",
                                            fontSize: "10px",
                                        },
                                    }}
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Box>
                    <Box>
                        <ThemeToggle />
                    </Box>
                    {isAuth ? (
                        <Link href="/profile/user">
                            <IconButton color="inherit">
                                <AccountCircleIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    ) : (
                        <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                            <Link href="/register">
                                <Button variant="text" color="inherit">
                                    Регистрация
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button variant="outlined" color="inherit">
                                    Войти
                                </Button>
                            </Link>
                        </Box>
                    )}
                </Stack>
            </Stack>
        </nav>
    );
};

export default HeaderDesktopMenu;
