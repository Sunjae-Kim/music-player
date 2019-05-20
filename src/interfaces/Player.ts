/**
 * Representing a Sound Cloud Player.
 */
export default interface Player {
  /** Starts to play the sound. Returns a Promise that resolves when playback starts, and may reject if the browser refuses playback. */
  play: () => Object;
  /** Pauses the player */
  pause: () => Object;
  /** Seeks to the position in the song (in milliseconds). Returns a Promise that resolves when the seek completes, or may reject if the seek is not possible. */
  seek: (time: number) => Object;
  /** Returns the current position (in milliseconds) */
  currentTime: () => number; 
  /** Sets the volume (from 0 to 1) */
  setVolume: (volume: number) => void; 
  /** Returns the current volume */
  getVolume: () => number;
  /** Returns the duration (in milliseconds) */
  getDuration: () => number; 
  /** Returns true whilst the player is buffering */
  isBuffering: () => boolean; 
  /** Returns true whilst the intended state is to be playing. This flips with `play()` and `pause()` calls. */
  isPlaying: () => boolean; 
  /** Returns true whilst the player is actually playing */
  isActuallyPlaying: () => boolean; 
  /** Returns true if the player is dead because of an error */
  hasErrored: () => boolean; 
  /** Returns true if the player is dead */
  isDead: () => boolean; 
  /** Returns 'playing', 'paused', 'loading', 'ended', 'error' or 'dead' */
  getState: () => string; 
  /** Kill the player. Call this when you do not need it anymore. */
  kill: () => void; 
  /** 
   * Subscribes the handler to the given event 
   * 
  */
  on: 
  /**
   * @param event 
   * - A event that `Sound Cloud Player` produces.
   * - `state-change` : when audio controller changes state (e.g. from pause to play). Possible values in callback parameter: 'playing', 'paused', 'loading', 'ended', 'error' or 'dead'
   * - `play` : when play method is called
   * - `play-start` : when playback actually starts, the first time
   * - `play-resume`: when playback starts, the second time onwards
   * - `play-rejection` : if a play request is rejected by the browser
   * - `pause` : when playback is paused
   * - `finish` : when sound is finished
   * - `seek` : when seek method is called
   * - `seeked` : when a seek completes
   * - `seek-rejection` : when a seek is rejected for some reason
   * - `geo_blocked` : when there's no available streams for a sound, as it is not allowed to be played in the user's territory.
   * - `buffering_start` : when buffering starts
   * - `buffering_end` : when buffering stops
   * - `audio_error` : when an error occurs
   * - `time` : when playback position is updated
   * - `no_streams` : when we failed fetching stream information
   * - `no_protocol` : when no supported protocol could be found
   * - `no_connection` : when we failed to connect to an endpoint due to missing transport or request timeout
   * @param handler
   * - Callback function that invokes after the event
   * - `Function` type : `() => void`
   */
  <T extends keyof PlayerEvents>(event: T, handler: PlayerEvents[T]) => void;
}

interface PlayerEvents {
  /** when audio controller changes state (e.g. from pause to play). Possible values in callback parameter: 'playing', 'paused', 'loading', 'ended', 'error' or 'dead' */
  'state-change' : (state: string) => void; 
  'play' : Function;
  'play-start' : Function;
  'play-resume': Function;
  'play-rejection' : Function;
  'pause' : Function;
  'finish' : Function;
  'seek' : Function;
  'seeked' : Function;
  'seek-rejection' : Function;
  'geo_blocked' : Function;
  'buffering_start' : Function;
  'buffering_end' : Function;
  'audio_error' : Function;
  'time' : Function;
  'no_streams' : Function;
  'no_protocol' : Function;
  'no_connection' : Function;
}