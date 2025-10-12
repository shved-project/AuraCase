import {Metadata} from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import {Roboto} from "next/font/google";
import MuiThemeProvider from "@/providers/MuiThemeProvider";

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
                <MuiThemeProvider>
                    <Layout>{children}</Layout>
                </MuiThemeProvider>
            </body>
        </html>
    );
}
