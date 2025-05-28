import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPodcasts = createAsyncThunk("resultsApi/fetchPodcasts", async (searchTerm = 'فنجان') => {
    console.log("calling fetch podcasts with term:", searchTerm)
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/search/podcasts?term=${encodeURIComponent(searchTerm)}`
        )
        console.log('API Response:', response);
        if (response.data && Array.isArray(response.data)) {
            return response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
            return response.data.data;
        }
        return [];
    } catch (error) {
        console.error('Error fetching podcasts:', error);
        throw error;
    }
})
const resultsApiSliceReducer= createSlice({
    name:"resultsApi",

    initialState: {
        results: "empty",
        podcasts: [],
        isLoading: false,
        error: null,
        searchTerm: 'فنجان'
    },
    reducers:{
        searchResult:(state , action)=>{
           state.results= "changed";
        }
    },extraReducers(builder){
        builder
            .addCase(fetchPodcasts.pending, (state, action) => {
                state.searchTerm = action.meta.arg || 'فنجان';
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPodcasts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.podcasts = action.payload;
                state.error = null;
                console.log('Updated state podcasts:', state.podcasts);
            })
            .addCase(fetchPodcasts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.podcasts = [];
            })
    }
})

export const {searchResult} = resultsApiSliceReducer.actions;
export default resultsApiSliceReducer.reducer;
