import React, {Component} from 'react';
import {Button, List, Icon, Segment, Dimmer, Loader} from 'semantic-ui-react';
import * as PropTypes from "prop-types";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <List.Item key={item.key}>
        <List.Content floated='right'>
          <Button
            size='mini'
            color={item.completed ? 'yellow' : 'green'}
            icon
            onClick={() => this.props.setItemDone(item.key)}
          >
            <Icon name={item.completed ? 'undo' : 'check'}/>
          </Button>

          <Button
            size='mini'
            color='red'
            icon
            onClick={() => this.props.deleteItem(item.key)}
          >
            <Icon name='trash'/>
          </Button>
        </List.Content>

        <List.Content>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={e => this.props.handleChange(item.key, e.target.checked)}/>

          <span style={{textDecoration: item.completed ? "line-through" : ""}}>
            {item.text}
          </span>
        </List.Content>
      </List.Item>
    )
  };

  render() {
    return this.props.loading
      ? <Segment style={{ padding: "40px 15px" }}>
          <Dimmer active inverted>
            <Loader content='Loading' />
          </Dimmer>
        </Segment>
      : <List divided verticalAlign='middle' className='list-todos'>{ this.props.entries.map(this.createTasks) }</List>
  }
}

TodoItems.propTypes = {
  loading: PropTypes.bool,
  entries: PropTypes.array,
  deleteItem: PropTypes.func,
  setItemDone: PropTypes.func,
  handleChange: PropTypes.func,
};

TodoItems.defaultProps = {
  loading: false,
  entries: [],
  deleteItem: () => {},
  setItemDone: () => {},
  handleChange: () => {},
};

export default TodoItems;
