import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWeather=createAsyncThunk("wheathApi/fetchWheather", async()=>{
    console.log("Calling fetch weather")
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=24.6877&lon=46.7219&appid=20c96fb6d69f122e4510a8e73fc5ce34",
    //   {
    //     cancelToken: new axios.CancelToken((c) => {
    //       cancleAxios = c;
    //     }),
    //   }
    )
    
      // handle success
      const responseTemp = Math.round(response.data.main.temp - 272.15);
      const min = Math.round(response.data.main.temp_min-272.15);
      const max = Math.round(response.data.main.temp_max-272.15);
      const description = response.data.weather[0].description;
      const responseIcon=response.data.weather[0].icon;
      console.log(response.data);
      console.log(responseIcon);

    console.log(response)  
    //   setTemp({
    //     number: responseTemp,
    //     description: responseDescription,
    //     min: responseMin,
    //     max: responseMax,
    //     icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    //   });

    
    return { number:responseTemp ,min ,max,description,icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png` }

});

export const wheatherApiSlice=createSlice({
    name:"wheatherApi",
    initialState:{
        result:'empty',
        wheather:{

        },
        isLoading:false
    
    },
    reducers:{
        changeResult:(state,action)=>{
            state.result="Changed"

        }
    },
    extraReducers(builder){
        builder.addCase(fetchWeather.pending, (state ,action)=>{
            console.log("==============")
            console.log(state,action)
            state.isLoading=true;
        }).addCase(fetchWeather.fulfilled ,(state,action)=>{
            console.log("**************")
            console.log(state,action)
            state.isLoading=false;

            state.wheather=action.payload

        }).addCase(fetchWeather.rejected, (state,action)=>{
            console.log("**************")
            console.log(state,action)
            state.isLoading=false;})}

    })

export const {changeResult}=wheatherApiSlice.actions;
export default wheatherApiSlice.reducer;