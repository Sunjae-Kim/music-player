import { Action, State } from '../interfaces';

const initialStates: State['tracks'] = {
  pending: false,
  failure: false,
  success: false,
  tracks: null,
};

const getTracks = (state = initialStates, action: Action) => {
  switch (action.type) {
    case 'GET_TRACKS_PENDING':
      return {
        ...state,
        pending: true,
        failure: false,
        success: false,
      };
    case 'GET_TRACKS_FAILURE':
      return {
        ...state,
        pending: false,
        failure: true,
        success: false,
      };
    case 'GET_TRACKS_SUCCESS':
      return {
        ...state,
        pending: false,
        failure: false,
        success: true,
      };
    case 'GET_TRACKS':
      const { tracks } = action.payload;
      return {
        ...state, tracks
      };
    default:
      return state;
  }
};

export default getTracks;
