import React,{useState,useEffect}  from 'react';
import '../assets/crud.css'
import {Container, TextField, Button, Grid} from '@mui/material';
import { useDispatch,useSelector } from 'react-redux'
import { insertProfile, updateProfile } from '../store/reducer'
export default function Crudform() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

    const editForm = useSelector((state)=>state.web.editProfileData);
    useEffect(() => {
      
    if(editForm){
      console.log(editForm);
      setName(editForm.profile.name);
      setEmail(editForm.profile.email)
    }
    
  }, [editForm]);
    const dispatch = useDispatch();
    function onSubmit(event){
      event.preventDefault();
      let data={
        name:name,
        email:email
        
      }
      if(editForm.index > -1){
        dispatch(updateProfile(data))
      }else{
        dispatch(insertProfile(data))
      }
        
        setName('');
        setEmail('');
        
      
     }
     function changeName(event){
      setName(event.target.value)
  }

  function changeEmail(event){
      setEmail(event.target.value)
  }
     
  return (
    <div>
        <Container >
        <form onSubmit={onSubmit}>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <div className='mgn-btm'><TextField  id="name" value={name} onChange={changeName} required type="text" label="Name" variant="outlined" /></div>
                    <div className='mgn-btm'><TextField id="email" value={email} onChange={changeEmail} required type="email" label="Email" variant="outlined" /></div>
                    <div className='mgn-btm'>
                    

                    </div>
                    <div className='mgn-btm'>
                    <Button type="submit" variant="contained">save</Button>
                    </div>
                </Grid>
                
            </Grid>
        </form>
        </Container>
    </div>
  )
}
