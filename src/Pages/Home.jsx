import { Box} from "@mui/material"
import { Header } from "./Header"
import { AboutMe } from "./About"

export const Home = () => {
    return (
        <Box sx={{ backgroundColor: "#11112cff",}}>
            <Header/>
            <AboutMe/>
        </Box>
    )
}