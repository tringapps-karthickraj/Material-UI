import React,{useState,useEffect}  from 'react';
import '../assets/crud.css'
import {Container, TextField, Button, Grid} from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { updateprofile } from '../store/reducer'
export default function Crudform() {
  
    const { register, handleSubmit ,reset,formState,submittedData, formState: { errors, isSubmitSuccessful } } = useForm();
    useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '',email:'' });
    }
  }, [formState, submittedData, reset]);
    const dispatch = useDispatch();
    function onSubmit(data){
        console.log(console.log(data));
        dispatch(updateprofile(data))
      
     }
     
  return (
    <div>
        <Container >
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <div className='mgn-btm'><TextField  id="name" {...register('name',{ required: true, maxLength: 20 })} error={errors.name?.type ? true : false} label="Name" variant="outlined" /></div>
                    <div className='mgn-btm'><TextField id="email"    {...register('email',{  required: true, pattern: /\S+@\S+\.\S+/})}
                error={errors.email?.type ? true : false} label="Email" variant="outlined" /></div>
                    <div className='mgn-btm'>
                    {/* <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
      >
        <div style={{display:"flex"}}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
        
      </RadioGroup>
    </FormControl> */}

                    </div>
                    <div className='mgn-btm'>
                    <Button type="submit" variant="contained">save</Button>
                    </div>
                    {/* <div className='mgn-btm'>
                    <Controller as={
                      <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={colleges}
                      getOptionLabel={option => getOpObj(option).label}
                      getOptionSelected={(option, value) => {
                        return option.label === getOpObj(value).label;
                      }}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="College" />}/>
                    }
                    />
                    </div> */}
                    
    


                </Grid>
                
            </Grid>
        </form>
        </Container>
    </div>
  )
}
