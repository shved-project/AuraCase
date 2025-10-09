import {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Box} from "@mui/material";

type Props = {
    children: ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Header />
            <Box component="main" sx={{flexGrow: 1}}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
