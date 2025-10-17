import Container from "@/components/layout/Container";
import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex items-center justify-center min-h-[70vh] relative bg-gradient-to-b from-[#00000085] to-[#000000E0]">
            <Container paddingY={10}>
                <video autoPlay muted loop playsInline className="absolute -z-10 inset-0 w-full h-full object-cover">
                    <source src="/video/hero-background.mp4" type="video/mp4" />
                </video>
                <Box sx={{marginBottom: {xs: 6, md: 12}, maxWidth: "620px", marginInline: "auto"}}>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            position: "relative",
                            fontSize: {xs: 65, md: 100},
                            textAlign: "center",
                            background: "linear-gradient(45deg, #4ECDC4, #cddc39)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "bold",
                            "&::after": {
                                content: "'Вырази свой стиль'",
                                position: "absolute",
                                top: "2px",
                                left: 0,
                                right: 0,
                                color: "transparent",
                                textShadow: "2px 2px 0px #000",
                                zIndex: -1,
                            },
                        }}
                    >
                        Вырази свой стиль
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{textAlign: "center", color: "#fff", fontSize: {xs: 19, md: 25}}}
                    >
                        Уникальные чехлы и аксессуары, которые подчеркнут вашу индивидуальность и защитят ваше
                        устройство
                    </Typography>
                </Box>
                <Link href="/products">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{marginInline: "auto", display: "block", fontSize: 22}}
                    >
                        Смотреть каталог
                    </Button>
                </Link>
            </Container>
        </section>
    );
};

export default Hero;
