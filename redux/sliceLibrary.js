import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../data/baseUrls';

export const fetchLibrary = createAsyncThunk(
    'library/fetchLibrary',
    async () => {
        const response = await fetch(baseUrl + 'library');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const librarySlice = createSlice({
    name: 'library',
    initialState: { isLoading: true, errMess: null, libraryArray: [] },
    reducers: {},
    extraReducers: {
        [fetchLibrary.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchLibrary.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.libraryArray = action.payload;
        },
        [fetchLibrary.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const libraryReducer = librarySlice.reducer;