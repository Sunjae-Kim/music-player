import { Action, State } from '../interfaces';

const initialStates: State['player'] = {
  pending: false,
  failure: false,
  success: false,
  SCPlayer: null,
  currentSong: null,
};

const getPlayer = (state = initialStates, action: Action) => {
  switch (action.type) {
    case 'GET_PLAYER_PENDING':
      return {
        ...state,
        pending: true,
        failure: false,
        success: false,
      }
    case 'GET_PLAYER_FAILURE':
      return {
        ...state,
        pending: false,
        failure: true,
        success: false,
      }
    case 'GET_PLAYER_SUCCESS':
      return {
        ...state,
        pending: false,
        failure: false,
        success: true,
      }
    case "GET_PLAYER":
      const { SCPlayer } = action.payload;
      return {
        ...state, SCPlayer
      }
    default:
      return state;
  }
};

export default getPlayer;
