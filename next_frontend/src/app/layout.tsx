import {Metadata} from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
