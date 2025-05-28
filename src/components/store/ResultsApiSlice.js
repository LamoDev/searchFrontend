import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodes = createAsyncThunk("resultsApi/fetchEpisodes", async (podcastId) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/podcast/${podcastId}/episodes`,
            { responseType: 'text' }
        );

        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "application/xml");
        const items = xml.querySelectorAll("item");

        const episodes = Array.from(items).map(item => ({
            title: item.querySelector("title")?.textContent || "",
            pubDate: item.querySelector("pubDate")?.textContent || "",
            audioUrl: item.querySelector("enclosure")?.getAttribute("url") || "",
            description: item.querySelector("description")?.textContent || ""
        }));

        return episodes;
    } catch (error) {
        console.error('Error fetching episodes:', error);
        throw error;
    }
});

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

const initialState = {
    results: "empty",
    podcasts: [],
    episodes: [],
    isLoading: false,
    error: null,
    searchTerm: 'فنجان'
}

const resultsApiSliceReducer = createSlice({
    name: "resultsApi",
    initialState,
    reducers: {
        searchResult: (state, action) => {
            state.searchTerm = action.payload || 'فنجان';
        },
        resetPodcasts: (state) => {
            state.podcasts = [];
            state.error = null;
        },
        resetEpisodes: (state) => {
            state.episodes = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPodcasts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPodcasts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.podcasts = action.payload;
                state.error = null;
            })
            .addCase(fetchPodcasts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.podcasts = [];
            })
            .addCase(fetchEpisodes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.episodes = action.payload;
                state.error = null;
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.episodes = [];
            })
    }
})

export const { searchResult, resetPodcasts, resetEpisodes } = resultsApiSliceReducer.actions;
export default resultsApiSliceReducer.reducer;
