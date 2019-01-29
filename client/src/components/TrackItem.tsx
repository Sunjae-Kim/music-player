import * as React from 'react';
import { Icon, Label, Card, Image, Dimmer, Header } from 'semantic-ui-react';
import * as moment from 'moment';
import { Track } from '../interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setPlayerAction, TypeKeys } from '../interfaces/Action';

interface WrapedState {
  active: boolean;
}

interface WrapedProps extends Track {
  setPlayer: (action: setPlayerAction) => void;
}

class TrackItem extends React.Component<WrapedProps, WrapedState> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: false,
    };
  }
  extra = ({ reposts_count, likes_count }: Track) => (
    <React.Fragment>
      <Label>
        <Icon color='red' name='heart' />
        {likes_count}
      </Label>
      <Label>
        <Icon name='sync alternate' />
        {reposts_count}
      </Label>
    </React.Fragment>
  );

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });
  handleClick = (stream_id: number) => {
    this.props.setPlayer({type: TypeKeys.SET_PLAYER, payload: {stream_id} });
  }

  render() {
    const { title, artwork_url, user, tag_list, duration, id } = this.props;
    const { active } = this.state;
    return (
      <Card as={'a'} 
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        onClick={() => this.handleClick(id)}
      >
        <Dimmer.Dimmable as={Image} blurring dimmed={active}>
          <Image src={artwork_url} />
          <Dimmer active={active}>
            <Icon color="grey" size="massive" inverted name="play circle"></Icon>
            <Header inverted color="grey">{moment(duration).format('mm:ss')}</Header>
          </Dimmer>
        </Dimmer.Dimmable>
        <Card.Content>
          <Card.Header >{title}</Card.Header>
          <Card.Meta>{user.username}</Card.Meta>
          <Card.Description>{tag_list}</Card.Description>
        </Card.Content>
        <Card.Content extra>{this.extra(this.props)}</Card.Content>
      </Card>
    );
  }
}

export default connect(
  null,
  (dispatch: Dispatch) => ({
    setPlayer: (action: setPlayerAction) => dispatch(action)
  })
)(TrackItem);
