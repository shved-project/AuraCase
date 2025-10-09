import {Box, Typography} from "@mui/material";
import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

interface Props {
    size?: "small" | "large";
}

const Logo = ({size = "small"}: Props) => {
    return (
        <Link href="/">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        border: "1px solid",
                        alignItems: "center",
                        justifyContent: "center",
                        width: size === "small" ? "25px" : "50px",
                        aspectRatio: "1/1",
                        borderRadius: "50%",
                    }}
                >
                    <PhoneAndroidIcon
                        sx={{transform: "rotate(-30deg)", fontSize: size === "small" ? "15px" : "30px"}}
                    />
                </Box>
                <Typography sx={{fontSize: size === "small" ? "10px" : "15px"}}>AuraCase</Typography>
            </Box>
        </Link>
    );
};

export default Logo;
