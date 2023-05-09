import { Stack, Box } from "@mui/material";
import { logo } from "../../Constans";
import { colors } from "../../Constans/colors";
import { Link } from "react-router-dom";
import {SearchBar} from "../";

 const Navbar = () => {
  return (
  <Stack height={'10vh'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} sx={{position: 'sticky', top: 0, zIndex: 77, background: colors.primary}}>
    <Link to={'/'}>
      <img src={logo} alt="logo" height={30} />
    </Link>

    <SearchBar/>
    <Box/>
  </Stack>
)}

export default Navbar;