import { createSlice } from '@reduxjs/toolkit'

export const profiles = createSlice({
  
  name: 'profiles',
  initialState: {
   profiles: localStorage['profiles'] ?  JSON.parse(localStorage['profiles']).profilesArr : [],
   editProfileData:{
     profile:{},
     index:-1
   }
  },
  reducers: {
    insertProfile: (state,action) => {
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
     updateProfile: (state,action)=>{
        const idx = state.editProfileData.index;
        const copyArr = [...state.profiles];
        console.log(copyArr)
        const payload = action.payload
        copyArr[idx] = payload;
        const remainsState={
          index:-1,
          profile:{}
        }
        let json={
          profilesArr:[]
        };
        json.profilesArr = JSON.parse(localStorage['profiles']).profilesArr
        json.profilesArr[idx] = action.payload;
        localStorage['profiles'] = JSON.stringify(json);
       return{
         ...state, 
        profiles: copyArr,
        editProfileData:remainsState
      }
        
     },
     deleteProfile:(state,action)=>{
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
     },
     editProfile:(state,action)=>{
        state.editProfileData = action.payload;
     }
  },
})

export const { insertProfile,deleteProfile,editProfile,updateProfile} = profiles.actions
export default profiles.reducer