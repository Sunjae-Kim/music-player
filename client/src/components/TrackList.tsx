import * as React from 'react';
import { ItemGroup } from 'semantic-ui-react';
import { Track, State } from 'src/interfaces';
import TrackItem from './TrackItem';
import { connect } from 'react-redux';

interface WrapedProps {
  tracks: Array<Track>
}

const TrackList = (props: WrapedProps) => {
  if(props.tracks) {
    return (
      <ItemGroup divided>
        {props.tracks.map(track => ( 
          <TrackItem key={track.id} {...track} />
        ))}
      </ItemGroup>
    )
  } else {
    return <div> There is no search result yet.. </div>;
  }
}

export default connect(
  (state:State) => ({
    tracks: state.tracks.tracks
  })
)(TrackList);
