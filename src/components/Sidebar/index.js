import React, {Component} from 'react';
import {Card, Grid, Label} from 'semantic-ui-react';
import CSS from './sidebar.module.scss';

class Sidebar extends Component {
  render() {
    return (
      <Grid.Column mobile={16} computer={5}>
        <Card fluid>
          <Card.Content>
            <Card.Header>Labels</Card.Header>
            <Card.Description>
              <Label as='a' tag className={CSS.tagLabel}>Office</Label>
              <Label as='a' tag className={CSS.tagLabel}>Home</Label>
              <Label as='a' tag className={CSS.tagLabel}>Work</Label>
              <Label as='a' tag className={CSS.tagLabel}>Car</Label>
              <Label as='a' tag className={CSS.tagLabel}>Free time</Label>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card fluid>
          <Card.Content>
            <Card.Header>Priority</Card.Header>
            <Card.Description>
              <Label as='a' color='grey'>Unprioritized</Label>
              <Label as='a' color='blue'>Low</Label>
              <Label as='a' color='yellow'>Middle</Label>
              <Label as='a' color='red'>Height</Label>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default Sidebar;
