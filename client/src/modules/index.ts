import player from './player';
import tracks from './tracks';
import { combineReducers } from 'redux';

export default combineReducers({
  player, tracks
});