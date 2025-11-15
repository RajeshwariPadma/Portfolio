import { Box, Button, TextField, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const ContactMe = () => {
    return (
        <Box>
            <Box sx={{ pb: 10 }}>
                <Typography sx={{
                    fontSize: 40,
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    gap: 1,
                    color: "white"
                }}>Contact <Typography sx={{
                    fontSize: 40,
                    fontWeight: "bold",
                    flexDirection: "row",
                    color: " rgba(20, 237, 237, 0.93)"
                }}>Me</Typography></Typography>
            </Box>
            <Box sx={{ color: "white", display: "flex", flexDirection: "row", pl: 20, }}>
                <Box >

                    <Typography sx={{
                        fontSize: 25,
                        fontWeight: "bold",
                        cursor: "pointer",
                        pb: 3,
                        ":hover": {
                            color: "rgba(210, 12, 12, 0.93)"
                        }
                    }}>Let's Work Together</Typography>
                    <Typography sx={{
                        display: "flex",
                        flexWrap: "nowrap",
                        width: 350,
                        pb: 3,
                    }}>If you are looking for a dedicated developer to build clean, modern, and responsive web applications, I’d love to collaborate with you. Feel free to reach out for projects, opportunities, or any questions — I’m always happy to connect!</Typography>
                    <Typography sx={{
                        fontWeight: "bold",
                        fontSize: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        color: " rgba(115, 211, 246, 0.93)"
                    }}><EmailIcon sx={{ color: " rgba(236, 243, 247, 0.93)" }} /> Email:<Typography sx={{ fontSize: 20, color: " rgba(241, 222, 203, 0.93)" }}>yourmail@gmail.com</Typography></Typography>
                    <Typography sx={{
                        fontWeight: "bold",
                        fontSize: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        color: " rgba(115, 211, 246, 0.93)"
                    }}><LocalPhoneIcon sx={{ color: " rgba(236, 243, 247, 0.93)" }} /> Phone:<Typography sx={{ fontSize: 20, color: " rgba(241, 222, 203, 0.93)" }}>+91-123456987</Typography></Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        color: " rgba(245, 252, 252, 0.93)",
                        pt: 3,
                        width: 40, height: 25
                    }}>
                        {[<WhatsAppIcon sx={{ ":hover": { color: " rgba(32, 242, 63, 0.93)", } }} />, <FacebookIcon sx={{ ":hover": { color: " rgba(65, 168, 247, 0.93)", } }} />, <TwitterIcon sx={{ ":hover": { color: " rgba(25, 112, 178, 0.93)", } }} />, <InstagramIcon sx={{ ":hover": { color: " rgba(245, 120, 54, 0.93)", } }} />].map((icon) => (
                            <Box sx={{
                                transition: "transform 220ms ease , box-shadow 220ms ease , border-color 220ms ease",

                                ":hover": {
                                    border: 1.2,
                                    borderColor: " rgba(4, 231, 231, 0.93)",
                                    // color: " rgba(4, 231, 231, 0.93)",
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
                <Box sx={{ color: "white", display: "flex", flexDirection: "column", gap: 3, width: 520, pl: 25, pb: 10 }}>
                    <TextField label="Enter name" type="text" sx={{ color: "white", backgroundColor: "#8c8f8fff" }} />
                    <TextField label="Enter phone number" type="text" sx={{ color: "white", backgroundColor: "#8c8f8fff" }} />
                    <TextField label=" Enter email" type="email" sx={{ color: "white", backgroundColor: "#8c8f8fff" }} />
            
                    <Button type="submit" sx={{
                        color: "black",
                        fontWeight : "bold",
                        backgroundColor: " #00ffff",
                        boxShadow: `0 0 10px #00ffff,
                                    0 0 20px #00ffff,
                                    0 0 30px #00ffff,
                                    0 0 50px #00ffff`,
                    }}>Submit</Button>
                </Box>
            </Box>

        </Box>

    )
}