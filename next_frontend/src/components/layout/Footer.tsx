import {Box, Button, Stack} from "@mui/material";
import Logo from "../ui/Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <Box component="footer" sx={{backgroundColor: "primary.main", color: "#fff"}}>
            <Box sx={{padding: 2}}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Logo />
                    <Link href="/products">
                        <Button variant="contained" color="secondary">
                            Каталог
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
