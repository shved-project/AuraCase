import {Box, Typography} from "@mui/material";
import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Logo = () => {
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
                        width: "25px",
                        aspectRatio: "1/1",
                        borderRadius: "50%",
                    }}
                >
                    <PhoneAndroidIcon sx={{transform: "rotate(-30deg)", fontSize: "15px"}} />
                </Box>
                <Typography sx={{fontSize: "10px"}}>AuraCase</Typography>
            </Box>
        </Link>
    );
};

export default Logo;
