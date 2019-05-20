import { Player, Track } from './index';

export interface PlayerState {
  pending: boolean;
  failure: boolean;
  success: boolean;
  SCPlayer: Player | null;
  currentSong: Track | null;
}

export interface TracksState {
  pending: boolean;
  failure: boolean;
  success: boolean;
  tracks: Array<Track> | null;
}

export interface combinedState {
  player: PlayerState;
  tracks: TracksState;
}

export default combinedState;