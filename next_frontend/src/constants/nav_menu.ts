import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {ComponentType} from "react";
import {SvgIconProps} from "@mui/material";

interface BaseNavItem {
    id: number;
    label: string;
    icon: ComponentType<SvgIconProps>;
}

interface SimpleNavItem extends BaseNavItem {
    type: "simple";
    path: string;
}

interface CategoryNavItem extends BaseNavItem {
    type: "category";
    categories: SimpleNavItem[];
}

export type NavItem = SimpleNavItem | CategoryNavItem;

const NAV_MENU: NavItem[] = [
    {
        id: 1,
        type: "simple",
        label: "Главная",
        path: "/",
        icon: HomeFilledIcon,
    },
    {
        id: 2,
        type: "category",
        label: "Товары",
        icon: LocalMallIcon,
        categories: [
            {
                id: 1,
                type: "simple",
                label: "Все товары",
                path: "/products",
                icon: ListAltIcon,
            },
            {
                id: 2,
                type: "simple",
                label: "Чехлы",
                path: "/products/cases",
                icon: SmartphoneIcon,
            },
            {
                id: 3,
                type: "simple",
                label: "Наушники",
                path: "/products/headphones",
                icon: HeadphonesIcon,
            },
            {
                id: 4,
                type: "simple",
                label: "Защитные стёкла",
                path: "/products/screen-protectors",
                icon: ScreenLockPortraitIcon,
            },
            {
                id: 5,
                type: "simple",
                label: "Зарядные устройства",
                path: "/products/chargers",
                icon: ElectricalServicesIcon,
            },
        ],
    },
    {
        id: 3,
        type: "simple",
        label: "Корзина",
        path: "/products/cart",
        icon: ShoppingCartIcon,
    },
    {
        id: 4,
        type: "simple",
        label: "Избранное",
        path: "/products/favorites",
        icon: FavoriteIcon,
    },
    {
        id: 5,
        type: "simple",
        label: "Контакты",
        path: "/products/contacts",
        icon: LocalPhoneIcon,
    },
];

export default NAV_MENU;
