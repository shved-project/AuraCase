import {Box, Button, Stack} from "@mui/material";
import Logo from "../../ui/Logo";
import Link from "next/link";
import Container from "../Container";
import FooterLinkGroup from "./FooterLinkGroup";
import FOOTER_LINKS from "@/constants/footer_links";

const Footer = () => {
    return (
        <Box component="footer" sx={{backgroundColor: "primary.main", color: "#fff"}}>
            <Container>
                <Stack direction={{sm: "row"}} justifyContent={{sm: "space-between"}} gap={{xs: 4, sm: 15}}>
                    <Stack
                        direction={{xs: "row", sm: "column"}}
                        alignItems={{xs: "center", sm: "flex-start"}}
                        justifyContent={{xs: "space-between", sm: "flex-start"}}
                        spacing={{sm: 2}}
                    >
                        <Logo size="large" />
                        <Link href="/products">
                            <Button variant="contained" color="secondary" size="large">
                                Каталог
                            </Button>
                        </Link>
                    </Stack>
                    <Stack gap={3} direction={{sm: "row"}} sx={{flexWrap: {xs: "nowrap", sm: "wrap"}}}>
                        {FOOTER_LINKS.map((item, index) => (
                            <FooterLinkGroup key={index} group={item} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
            <Box sx={{textAlign: "center", backgroundColor: "#000", paddingY: 0.5}}>
                © 2025 AuraCase. Все права защищены.
            </Box>
        </Box>
    );
};

export default Footer;
