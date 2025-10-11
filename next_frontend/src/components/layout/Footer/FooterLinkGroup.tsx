import {FooterLinksGroup} from "@/constants/footer_links";
import {IconButton, Stack, Typography} from "@mui/material";
import Link from "next/link";

interface Props {
    group: FooterLinksGroup;
}

const FooterLinkGroup = ({group}: Props) => {
    return (
        <Stack>
            <Typography
                variant="h6"
                sx={{
                    borderBottom: "2px solid",
                    width: "max-content",
                    marginBottom: 1,
                    textTransform: "uppercase",
                }}
            >
                {group.title}
            </Typography>
            <ul className={`${group.type === "buttonLink" && "flex-row"} flex flex-col gap-2 ml-3`}>
                {group.type === "link" &&
                    group.links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className="relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:duration-150 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                {group.type === "iconLink" &&
                    group.links.map((link, index) => {
                        const Icon = link.icon;

                        return (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="flex items-start gap-1 max-w-max relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:duration-150 hover:after:w-full"
                                >
                                    <Icon />
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                {group.type === "buttonLink" &&
                    group.links.map((link, index) => {
                        const Icon = link.icon;

                        return (
                            <li key={index}>
                                <a href={link.href} target="_blank" aria-label={link.ariaLabel}>
                                    <IconButton color="inherit">
                                        <Icon />
                                    </IconButton>
                                </a>
                            </li>
                        );
                    })}
            </ul>
        </Stack>
    );
};

export default FooterLinkGroup;
