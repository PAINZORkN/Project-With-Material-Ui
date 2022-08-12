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
// import styled from "@emotion/styled";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import { Checkbox } from '@mui/material';

const Post = (props) => {
  return (
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={ props.color} aria-label="recipe">
            {props.name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <cardMediaMobile>
       <CardMedia
        component="img"
        sx={{maxWidth:'800', maxHeight:'1200'}}
        image={props.img}
        alt=""
        />
      </cardMediaMobile>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.desc}
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
  )
}

export default Post