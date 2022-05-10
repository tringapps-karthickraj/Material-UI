import { createSlice } from '@reduxjs/toolkit'

export const profiles = createSlice({
  
  name: 'profiles',
  initialState: {
   profiles: localStorage['profiles'] ?  JSON.parse(localStorage['profiles']).profilesArr : [],
   name:'zxzx'
  },
  reducers: {
    updateprofile: (state,action) => {
      let json={
        profilesArr:[]
      };
      if(localStorage['profiles'] === undefined){
        localStorage['profiles'] = JSON.stringify(json);
        console.log(localStorage['profiles']);
      }
    
      json.profilesArr = JSON.parse(localStorage['profiles']).profilesArr
       json.profilesArr.push(action.payload)
       localStorage['profiles'] = JSON.stringify(json);
        return {
          ...state,
          profiles: [...state.profiles,action.payload] 
         
        }
     },
     deleteProfile:(state,action)=>{
       console.log(action.payload)
       let localStr = JSON.parse(localStorage['profiles']).profilesArr;
       localStr.splice(action.payload,1);
       let json={
        profilesArr:localStr
       }
       console.log(json);
       localStorage['profiles'] = JSON.stringify(json);

      return {
        ...state,
        profiles: [...state.profiles.slice(0, action.payload),
          ...state.profiles.slice(action.payload + 1)] 
       
      }
     }
  },
})

export const { updateprofile,deleteProfile } = profiles.actions
export default profiles.reducer