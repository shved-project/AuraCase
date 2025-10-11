import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {ComponentType} from "react";

interface BaseLink {
    href: string;
    label: string;
}

interface IconLink {
    href: string;
    label: string;
    icon: ComponentType;
}

interface ButtonLink {
    href: string;
    ariaLabel: string;
    icon: ComponentType;
}

interface BaseLinksGroup {
    title: string;
}

interface BaseLinkGroup extends BaseLinksGroup {
    type: "link";
    links: BaseLink[];
}

interface IconLinkGroup extends BaseLinksGroup {
    type: "iconLink";
    links: IconLink[];
}

interface ButtonLinkGroup extends BaseLinksGroup {
    type: "buttonLink";
    links: ButtonLink[];
}

export type FooterLinksGroup = BaseLinkGroup | IconLinkGroup | ButtonLinkGroup;
type FooterLinks = [BaseLinkGroup, IconLinkGroup, ButtonLinkGroup];

const FOOTER_LINKS: FooterLinks = [
    {
        title: "О нас",
        type: "link",
        links: [
            {
                href: "/about",
                label: "О нас",
            },
            {
                href: "/privacy-policy",
                label: "Политика конфиденциальности",
            },
            {
                href: "/terms-of-service",
                label: "Условия использования",
            },
        ],
    },
    {
        title: "Контакты",
        type: "iconLink",
        links: [
            {
                href: "tel:+79197345443",
                label: "+7(919)734-54-43",
                icon: PhoneAndroidIcon,
            },
            {
                href: "mailto:shvitc@yandex.ru",
                label: "shvitc@yandex.ru",
                icon: EmailIcon,
            },
            {
                href: "https://yandex.ru/maps/org/dom_kolotushkina/89067343641/?ll=91.422759%2C53.714688&z=16.99",
                label: "Улица Пушкина, дом Колотушкина",
                icon: LocationOnIcon,
            },
        ],
    },
    {
        title: "Соц. сети",
        type: "buttonLink",
        links: [
            {
                href: "https://t.me/shved_project",
                ariaLabel: "Написать в telegram",
                icon: TelegramIcon,
            },
            {
                href: "https://wa.me/+79197345443",
                ariaLabel: "Написать в whatsapp",
                icon: WhatsAppIcon,
            },
        ],
    },
];

export default FOOTER_LINKS;
