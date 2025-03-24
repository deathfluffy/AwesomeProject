import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Track } from "../../types";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

interface TracksState {
  data: Track[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TracksState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchNewestSongs = createAsyncThunk(
  "youtube/",
  async () => {
    try {
      const response = await fetch(`${BACKEND_SERVER}/youtube/newest`);
      const data = await response.json();
      return data as Track[];
    } catch (error) {
      throw Error('Failed to fetch tracks');
    }
  }
);

export const toggleLikeTrack = createAsyncThunk(
  "toggleLike/",
  async ({ trackId }: { trackId: string }) => {
    const response = await fetch(`${BACKEND_SERVER}/youtube/${trackId}/toggle-like`, {
      method: "POST",
    });
    const data = await response.json();
    return data as Track;
  }
);

export const searchSongs = createAsyncThunk(
  "youtube/",
  async ({ trackId }: { trackId: string }) => {
    const response = await fetch(
      `${BACKEND_SERVER}/youtube/?q=${encodeURIComponent(trackId)}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data as Track;
  }
);
const songsSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewestSongs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNewestSongs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchNewestSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default songsSlice.reducer;
