import {Metadata} from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {Roboto} from "next/font/google";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/theme_mui/theme";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: {
        template: "%s | AuraCase",
        default: "AuraCase",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={roboto.variable}>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Layout>{children}</Layout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
