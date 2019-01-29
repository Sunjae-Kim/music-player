import { Player, Track } from './index';

/**
 * Represent Redux Action type keys
 */
export enum TypeKeys {
  /* Player */
  GET_PLAYER_PENDING = 'GET_PLAYER_PENDING',
  GET_PLAYER_FAILURE = 'GET_PLAYER_FAILURE',
  GET_PLAYER_SUCCESS = 'GET_PLAYER_SUCCESS',
  GET_PLAYER = 'GET_PLAYER',
  SET_PLAYER = 'SET_PLAYER',

  /* Tracks */
  GET_TRACKS_PENDING = 'GET_TRACKS_PENDING',
  GET_TRACKS_FAILURE = 'GET_TRACKS_FAILURE',
  GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS',
  GET_TRACKS = 'GET_TRACKS',
  SET_TRACKS = 'SET_TRACKS',

}

/* Player */
export type getPlayerPenderAction = {
  type: 
    TypeKeys.GET_PLAYER_FAILURE | 
    TypeKeys.GET_PLAYER_PENDING | 
    TypeKeys.GET_PLAYER_SUCCESS;
}
export type getPlayerAction = {
  type: TypeKeys.GET_PLAYER;
  payload: {
    SCPlayer: Player;
  }
}
export type setPlayerAction = {
  type: TypeKeys.SET_PLAYER;
  payload: {
    stream_id: number;
  }
}

/* Tracks */
export type getTracksPenderAction = {
  type:
    TypeKeys.GET_TRACKS_FAILURE |
    TypeKeys.GET_TRACKS_PENDING |
    TypeKeys.GET_TRACKS_SUCCESS;
}
export type getTracksAction = {
  type: TypeKeys.GET_TRACKS;
  payload: {
    tracks: Array<Track>
  }
}
export type setTracksAction = {
  type: TypeKeys.SET_TRACKS;
  payload: {
    query: string;
  }
}

/**
 * Represent Redux Action types
 */
type ActionTypes = 
  /** Sound Cloud player actions */
  getPlayerAction | setPlayerAction | getPlayerPenderAction |
  /** Sound Cloud tracks */
  getTracksAction | setTracksAction | getTracksPenderAction;

export default ActionTypes;