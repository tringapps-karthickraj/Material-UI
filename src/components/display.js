import React,{useState}from 'react'
import { Grid, Card , CardContent, CardHeader, CardMedia, IconButton, Typography, Menu,MenuItem,Box,Button} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import noImage from '../assets/no_image/noimg.jpg'
import { useDispatch } from 'react-redux'
import { deleteProfile } from '../store/reducer'
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
export default function Display() {
  const[anchorEl ,setAnchorEl] = useState(null)
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [passIdx,setPassIdx]=useState(null);
  const open= Boolean(anchorEl)
  function handleClick(event,idx){
    setPassIdx(idx);
    setAnchorEl(event.currentTarget)
 }
 function  handleClose(){
     setAnchorEl(null)
 }
  const profileArr = useSelector((state)=>state.web.profiles);
  function editCard(){
    setAnchorEl(null)
  }
  function deleteCard(){
    
    setAnchorEl(null)
    DialogClick();
   
  }
  const DialogClick = () => {
    setDialogOpen(!dialogOpen);
  };
  function deleteProfiles(){
    dispatch(deleteProfile(passIdx))
    DialogClick();
  }

  return (
    <div>
      <Grid container spacing={12}>
{profileArr?.length > 0 && profileArr.map((profile,index)=>{  
      return   <Grid item xs={4}>
      <Box className='box'>
<Card variant='outlined'>
  <CardHeader  action={
      <IconButton>
      < MoreVertIcon id="dot-icon" onClick={(event)=>handleClick(event,index)} 
        aria-controls={open ? 'icon-menu' : undefined}
        aria-haspopup='true' 
        aria-expanded={open ? 'true' : undefined}/>
  </IconButton>
  } />
  <Menu id="icon-menu"  anchorEl={anchorEl} 
     open={open}
     MenuListProps={
         {
             'aria-labelledby' :'dot-icon',
         }
     }
     onClose={handleClose}>
        <MenuItem onClick={editCard}>Edit</MenuItem>
        <MenuItem onClick={deleteCard}>Delete</MenuItem>
    </Menu>
    <Dialog
        open={dialogOpen}
        onClose={DialogClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={DialogClick}>Disagree</Button>
          <Button onClick={deleteProfiles} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  <CardMedia component='img' height='220' image={noImage} alt='picture'/>
  <CardContent>
      <Typography gutterBottom variant='h5' component='div'>Profile Details</Typography>
      <Typography variant='body2' color='text.secondary'>
          <div key={index}>
          <div><label>Name :</label>{profile.name}</div>
          <div><label>Email :</label>{profile.email}</div>
          </div>
      </Typography>
  </CardContent>
</Card>
</Box>
      </Grid>
  
    })}
    </Grid>
    </div>
    
    
    
  )
}

