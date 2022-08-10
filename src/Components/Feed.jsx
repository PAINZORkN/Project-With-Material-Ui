import { Box, Checkbox } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


const cardMediaMobile = styled(Box)(({ theme }) => ({
  width: "15%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));

const Feed = () => {
  return (
    <Box flex={4} padding={2}>

    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <cardMediaMobile>
       <CardMedia
        component="img"
        height="20%"
        image="https://upload.wikimedia.org/wikipedia/commons/8/85/Pasta_e_fagioli_cannellini.jpg"
        alt="Paella dish"/>
      </cardMediaMobile>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive pasta e fasule is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  );
};

export default Feed;
