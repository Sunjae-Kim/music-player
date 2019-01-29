import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Header, Icon, Button } from 'semantic-ui-react';
import SearchInput from './SearchInput';
import SoundCloudAPI from '../services';
import { Player, State, Action } from '../interfaces';
import TrackList from './TrackList';

interface WrapedProps {
  player: Player;
}

class App extends React.Component <WrapedProps> {

  async componentDidMount() {
    await SoundCloudAPI.init();
  }

  onPlayButtonClick = () => {
    const { player } = this.props;
    if (player) player.play();
  }

  onPauseButtonClick = () => {
    const { player } = this.props;
    if (player) player.pause();
  }

  renderHeader = () => (
    <Header as='h1' icon color="teal">
      <Icon name='soundcloud' />
    </Header>
  )

  renderMediaButtons = () => (
    <React.Fragment>
      <Button.Group color="teal" icon>
        <Button>
          <Icon name='backward' />
        </Button>
        <Button>
          <Icon name='play' onClick={this.onPlayButtonClick} />
        </Button>
        <Button>
          <Icon name='pause' onClick={this.onPauseButtonClick} />
        </Button>
        <Button>
          <Icon name='stop' />
        </Button>
        <Button>
          <Icon name='forward' />
        </Button>
      </Button.Group>{' '}
      <Button.Group color="teal" icon>
        <Button>
          <Icon name='redo' />
        </Button>
        <Button>
          <Icon name='shuffle' />
        </Button>
        <Button>
          <Icon name='volume up' />
        </Button>
      </Button.Group>
    </React.Fragment>
  )

  public render() {
    return (
      <Container>
        {this.renderHeader()}
        <br />
        <SearchInput />
        <br />
        {this.renderMediaButtons()}
        <br />
        <TrackList />
      </Container>
    );
  }
}

export default connect(
  (state: State) => ({
    player: state.player.SCPlayer,
  }),
  (dispatch: Dispatch<Action>) => ({
    
  })
)(App);
