import {Metadata} from "next";
import Hero from "./sections/Hero";

export const metadata: Metadata = {
    title: "Главная",
};

export default function Home() {
    return (
        <>
            <Hero />
        </>
    );
}
