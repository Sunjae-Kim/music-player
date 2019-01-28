/* Sound Cloud SDK */
declare const SC: any;
import config from '../../config';
import { Player } from "../interfaces";

const SoundCloudAPI = {
  init: function() {
    SC.initialize({
      client_id: config.SoundCloudAPIKey,
    });
  },
  search: function(query: string) {
    return SC.get('/tracks', {
      q: query
    });
  },
  stream: function(id:number): Player {
    return SC.stream(`/tracks/${id}`);
  }
};

export default SoundCloudAPI;
