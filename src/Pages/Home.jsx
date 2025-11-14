import { Box} from "@mui/material"
import { Header } from "./Header"
import { AboutMe } from "./About"
import { Skills } from "./Skills"
import { LatestProjects } from "./Projects"

export const Home = () => {
    return (
        <Box sx={{ backgroundColor: "#11112cff",}}>
            <Header/>
            <AboutMe/>
            <Skills/>
            <LatestProjects/>
        </Box>
    )
}