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
                <Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Logo size="large" />
                        <Link href="/products">
                            <Button variant="contained" color="secondary" size="large">
                                Каталог
                            </Button>
                        </Link>
                    </Stack>
                    <Stack sx={{marginTop: 4}} spacing={3}>
                        {FOOTER_LINKS.map((item, index) => (
                            <FooterLinkGroup key={index} group={item} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
