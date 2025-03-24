export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverUrl?: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  title: string;
  description?: string;
  tracksCount: number;
  coverUrl: string;
  tracks?: Track[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  likedTracks?: Track[];
  savedPlaylists?: Playlist[];
} 
export interface TracksState {
  likedTracks: Track[];
  isLoading: boolean;
  error: string | null;
}
