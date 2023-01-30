import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bggSearch } from '../data/baseUrls';
import { query } from '../screens/SearchScreen';

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (payload) => {
        const response = await fetch(bggSearch + payload.query)
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.text();
        return data;
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: { isLoading: true, errMess: null, searchArray: [] },
    reducers: {
        parseQuery: (state, action) => {
            state.searchQueryArray.push(action.payload)
        }
    },
    extraReducers: {
        [fetchSearch.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.searchArray = action.payload;
        },
        [fetchSearch.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const searchReducer = searchSlice.reducer;