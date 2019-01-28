import * as React from 'react';
import SoundCloudAPI from '../services';
import { Player } from '../interfaces';

class App extends React.Component {
  state: {
    player: Player;
  };

  async componentDidMount() {
    await SoundCloudAPI.init();
    const player = await SoundCloudAPI.stream(298089055);
    this.setState({ player });

    player.on('state-change', (state) => {
      console.log(`@ Player is Currently ${state}`);
    });

  }

  onSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      const query = (event.target as HTMLInputElement).value;
      const tracks = await SoundCloudAPI.search(query);
      console.log(tracks);
    }

  };

  onPlayButtonClick = () => {
    this.state.player.play();
  }

  onPauseButtonClick = () => {
    this.state.player.pause();
  }

  public render() {
    return (
      <div>
        <input type='text' onKeyDown={this.onSearch} />
        <button type="button" onClick={this.onPlayButtonClick}> play </button>
        <button type="button" onClick={this.onPauseButtonClick}> pause </button>
      </div>
    );
  }
}

export default App;
