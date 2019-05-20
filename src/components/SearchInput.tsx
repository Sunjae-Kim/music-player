import * as React from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { TypeKeys, setTracksAction } from '../interfaces/Action'
import { State, Action } from '../interfaces';
import { Dispatch } from 'redux';

interface WrapedProps {
  searchTracks: (action: setTracksAction) => void;
  /* Pender for searching from SC API */
  pending: boolean;
  success: boolean;
}

interface WrapedState {
  query: string;
}

class SearchInput extends React.Component<WrapedProps, WrapedState> {
  constructor(props: WrapedProps) {
    super(props);
    this.state = {
      query: ''
    }
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    this.setState({ query: value });
    console.log(value);
  }

  onInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { query } = this.state;
    if (event.keyCode === 13) {
      this.props.searchTracks({type: TypeKeys.SET_TRACKS, payload: { query }});
    }
  }
  onSearchBtnClick = () => {
    const { query } = this.state;
    this.props.searchTracks({type: TypeKeys.SET_TRACKS, payload: { query }});
  }

  render() {
    const { query } = this.state;
    const { pending } = this.props;
    return (
      <Input 
        icon={{ name: 'search', circular: true, link: true, onClick: this.onSearchBtnClick }} 
        placeholder='Search...' 
        value={query}
        onKeyDown={this.onInputEnter}
        onChange={this.onInputChange}
        loading={pending ? true : false}
      />
    )
  }
}

export default connect(
  (state: State) => ({
    /* Pender for searching from SC API */
    pending: state.tracks.pending,
    success: state.tracks.pending
  }),
  (dispatch: Dispatch<Action>) => ({
    searchTracks: (action: setTracksAction) => dispatch(action)
  })
)(SearchInput);
