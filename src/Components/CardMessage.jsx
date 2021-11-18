import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../_redux/actions/postsActions/postsActions";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import eyesClose from '../img/eyesClose.jpg';
import eyesOpen from '../img/eyesOpen.jpg';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import Loading from './Loading';
import { Box } from "@mui/system";
import Alert from '@mui/material/Alert';


const CardMessage = () => {

  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);


  return (
    <Card sx={{ maxWidth: 345, padding: '.4rem .6rem', height: 'auto'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Cat's facts"
      />
      <CardMedia
        component="img"
        height="260"
        image={eyesClose}
        alt="Cat Meuw"
      />
      <CardContent>
        <Typography variant="body1">
          <Box>
            {pending ? (<Loading/>) : error ? (<Alert severity="error">Error! Please try again</Alert>) : posts.text}
           </Box>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon color="warning"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          variant="contained"
          endIcon={<PetsIcon />}
          style={{ marginLeft: 'auto' }} onClick={() =>dispatch(fetchPostsRequest())}>
          Get a fact
        </Button>
      </CardActions>
    </Card>
      
      
  );
};

export default CardMessage;
