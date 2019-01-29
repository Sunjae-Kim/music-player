import * as React from 'react';
import { Item, Icon, Label } from 'semantic-ui-react';
import * as moment from 'moment';
import { Track } from '../interfaces';
import '../styles/TrackItem.css';

class TrackItem extends React.Component<Track> {
  
  render() {
    const {title, artwork_url, duration, likes_count, user, reposts_count} = this.props;
    return (
      <Item>
        <Item.Image src={artwork_url} />

        <Item.Content>
          <Item.Header as='a'>{title}{}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{moment(duration).format('mm:ss')} | {user.username}</span>
            </Item.Meta>
           <Item.Description>{}</Item.Description>
            <Item.Extra>
              <Label>
                <Icon color='red' name='heart' />{likes_count}
              </Label>
              <Label>
                <Icon name='sync alternate' />{reposts_count}
              </Label>
            </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TrackItem;