import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGames } from '../../data/baseUrls';

export const fetchGames = createAsyncThunk(
    'games/fetchGames',
    async () => {
        const response = await fetch(apiGames);
        if(!response.ok) {
            return Promise.reject(
                'Unable to fetch games list. Status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const gamesSlice = createSlice({
    name: 'games',
    initialState: { isLoading: true, errMess: null, gamesData: {}},
    reducers: {},
    extraReducers: {
        [fetchGames.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGames.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.gamesData = action.payload;
        },
        [fetchGames.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
            ? action.error.message
            : 'Fetch failed.';
        }
    }
});

export const gamesReducer = gamesSlice.reducer;