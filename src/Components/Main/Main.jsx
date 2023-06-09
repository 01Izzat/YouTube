import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../Constans/colors";
import {Category, Videos} from "../";
import { ApiService } from "../../Service/apiService";


const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSelectedCategory(category)

  useEffect(() => {
    ApiService.fetching('search?part=snippet&q=New').then(data => setVideos(data))
  }, [])

  return (
    <Stack>
      <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory}/>
      <Box p={2} sx={{ height:'90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant="h4" fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main;