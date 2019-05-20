import { call, put, takeEvery } from 'redux-saga/effects';
import SoundCloudAPI from '../services';
import { TypeKeys, setPlayerAction, setTracksAction } from '../interfaces/Action';
import { Track } from 'src/interfaces';
const { 
  GET_PLAYER_PENDING, GET_PLAYER_FAILURE, GET_PLAYER_SUCCESS, GET_PLAYER, SET_PLAYER,
  GET_TRACKS_PENDING, GET_TRACKS_FAILURE, GET_TRACKS_SUCCESS, GET_TRACKS, SET_TRACKS
} = TypeKeys;

export function* getrPlayerFromAPI(action: setPlayerAction) {
  const { stream_id } = action.payload;
  
  yield put({type: GET_PLAYER_PENDING});
  try {
    const SCPlayer = yield call(() => SoundCloudAPI.stream(stream_id));
    yield put({ type: GET_PLAYER, payload: { SCPlayer } });
    yield put({ type: GET_PLAYER_SUCCESS });
  } catch (error) {
    yield put({ type: GET_PLAYER_FAILURE });
  }
}

export function* getTracksFromAPI(action: setTracksAction) {
  const { query } = action.payload;
  console.log(`@ Saga : getTracks for '${query}'`);
  
  yield put({type: GET_TRACKS_PENDING});
  try {
    let tracks = yield call(() => SoundCloudAPI.search(query));
    tracks = tracks.reduce((result: Array<Track>, track: Track) => {
      if (track.artwork_url) {
        track.artwork_url = track.artwork_url.replace('large', 'crop');
        result.push(track)
      }
      return result;
    }, [])
    yield put({ type: GET_TRACKS, payload: { tracks } });
    yield put({ type: GET_TRACKS_SUCCESS });
  } catch (error) {
    yield put({ type: GET_TRACKS_FAILURE });
  }
}

export default function* root() {
  yield takeEvery(SET_PLAYER, getrPlayerFromAPI);
  yield takeEvery(SET_TRACKS, getTracksFromAPI);
}
