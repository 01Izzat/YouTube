import { category } from "../../Constans"
import {  Stack } from "@mui/material"
import { colors } from "../../Constans/colors"

const Category = () => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
      {category.map(item => (
        <button key={item.key} className={'category-btn'} style={{borderRadius: 0}}>
          <span style={{color: colors.secondary, marginRight: '15px'}} >{item.icon}</span>
          <span style={{opacity: '1'}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category