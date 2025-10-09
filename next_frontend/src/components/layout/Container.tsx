import {Box} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    fullWidth?: boolean;
    paddingX?: number;
    paddingY?: number;
}

const Container = ({children, fullWidth, paddingX = 2, paddingY = 5}: Props) => {
    return (
        <Box
            sx={{paddingX: paddingX, paddingY: paddingY, maxWidth: fullWidth ? "100%" : "1280px", marginInline: "auto"}}
        >
            {children}
        </Box>
    );
};

export default Container;
