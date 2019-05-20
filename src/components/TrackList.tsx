import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { Track, State } from 'src/interfaces';
import TrackItem from './TrackItem';
import { connect } from 'react-redux';

interface WrapedProps {
  tracks: Array<Track>
}

const TrackList = (props: WrapedProps) => {
  const tracks = props.tracks || [];
    return (
      <Card.Group>
        {tracks.map(track => ( 
          <TrackItem key={track.id} {...track} />
        ))}
      </Card.Group>
    )
}

export default connect(
  (state:State) => ({
    tracks: state.tracks.tracks
  })
)(TrackList);
