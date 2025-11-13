import { Box, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundphoto from "../assets/backgroundphoto.jpg";
import { keyframes } from "@mui/material";

export const Home = () => {
    const boxShadow = keyframes`
    0% {
     boxShadow: 0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 40px #00ffff,
                
    },
     50% {
     boxShadow: 
                0 0 20px #00ffff,
                0 0 40px #00ffff,
                0 0 80px #00ffff,
    },
     100% {
     boxShadow: 
                
                0 0 40px #00ffff,
                0 0 80px #00ffff,
                0 0 100px #00ffff,
    }`
    return (
        <Box sx={{
            pt: 20,
            color: "white",
            backgroundColor: "#11112cff",
            display: "flex",

        }}>
            <Box sx={{ display: "flex", flexDirection: "column", px: 15, py: 15 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>Hello , It's Me</Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: 50 }}>Rajeshwari Padma</Typography>
                <Typography gutterBottom sx={{ fontWeight: "bold", fontSize: 30, display: "flex" }}>And I'm a   <Typography gutterBottom sx={{ fontWeight: "bold", fontSize: 30, pl: 2, color: " rgba(4, 231, 231, 0.93)" }}> Frontend Developer </Typography> </Typography>
                <Typography >I'm a Software Developer with extensive experience for over 1.5 years. <br></br>
                    Expertise is to create and website design , Frontend design and <br></br>
                    many more....</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    color: " rgba(245, 252, 252, 0.93)",
                    pt: 3,
                    width: 40, height: 25
                }}>
                    {[<WhatsAppIcon />, <FacebookIcon />, <TwitterIcon />, <InstagramIcon />].map((icon) => (
                        <Box sx={{
                            transition: "transform 220ms ease , box-shadow 220ms ease , border-color 220ms ease",

                            ":hover": {
                                border: 1.2,
                                borderColor: " rgba(4, 231, 231, 0.93)",
                                color: " rgba(4, 231, 231, 0.93)",
                                p: 0.5,
                                borderRadius: 30,
                                borderWidth: 3,
                                flexShrink: "none",
                                width: 40, height: 25,
                                transform: "translateY(-3px)",
                                boxShadow: `0 0 10px #00ffff,
                                            0 0 20px #00ffff,
                                            0 0 40px #00ffff,
                                            0 0 80px #00ffff`,


                            }
                        }}>
                            {icon}
                        </Box>
                    ))}

                </Box>
            </Box>
            <Box sx={{ py: 15, px: 6 }}>
                <Box component="img"
                    src={backgroundphoto}
                    sx={{
                        height: 270,
                        width: 270,
                        borderRadius: 70,
                        borderWidth: 1,
                        borderColor: "yellow",
                        boxShadow: `0 0 10px #29f9f9ff,
                                    0 0 20px #51d3f4ff,
                                    0 0 30px #1de3f9ff,
                                     0 0 40px #1de3f9ff,
                                      0 0 50px #1de3f9ff,
                                    0 0 60px #1de3f9ff,
                                    0 0 70px #f38080ff ,
                                     0 0 80px #f38080ff`
                        // animation: `${boxShadow} 5s ease-in-out infinite`
                    }}></Box>
            </Box>
        </Box>
    )
}