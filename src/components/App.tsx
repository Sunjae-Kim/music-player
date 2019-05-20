import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Menu, Icon, Button, Segment } from 'semantic-ui-react';
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
    <Segment className="ui fixed top sticky">
      <Menu text>
        <Menu.Item>
          <Icon id="logo" color="orange" size="huge" name='soundcloud' />
        </Menu.Item>
        <Menu.Item>
          <SearchInput />
        </Menu.Item>
      </Menu>
    </Segment>
  )

  renderMediaButtons = () => (
    <div className="ui fixed bottom sticky">
      <Button.Group color="orange" icon>
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
      <Button.Group color="orange" icon>
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
    </div>
  )

  public render() {
    return (
      <Container fluid>
        {this.renderHeader()}
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
