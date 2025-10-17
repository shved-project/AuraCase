"use client";

import {useEffect, useState} from "react";

const HeaderSpacer = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const headerElem = document.getElementById("main-header") as HTMLElement | null;

            if (headerElem) {
                setHeaderHeight(headerElem.offsetHeight);
            }
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return <div style={{height: `${headerHeight}px`}}></div>;
};

export default HeaderSpacer;
