import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box backgroundColor="skyblue" flex={1} padding={2} sx={{display: {xs:"none", sm:"block"}}}>Sidebar</Box>
  )
}

export default Sidebar