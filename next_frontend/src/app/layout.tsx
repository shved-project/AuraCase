import {Metadata} from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

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
        <html lang="ru">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
