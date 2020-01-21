import React, {Component} from 'react';
import {Input, Divider} from 'semantic-ui-react';
import * as PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <Divider hidden/>

        <form onSubmit={this.props.addItem}>
          <Input
            action={{
              content: 'Add',
              disabled: !this.props.currentItem,
            }}
            placeholder="Add Task"
            size='big'
            autoFocus
            fluid
            ref={this.props.inputElement}
            value={this.props.currentItem || ''}
            onChange={this.props.handleInput}
          />
        </form>

        <Divider hidden/>
      </div>
    )
  }
}

TodoList.propTypes = {
  addItem: PropTypes.func,
  inputElement: PropTypes.object,
  handleInput: PropTypes.func,
  currentItem: PropTypes.string,
};

TodoList.defaultProps = {
  addItem: () => {
  },
  inputElement: () => {
  },
  handleInput: () => {
  },
  currentItem: '',
};

export default TodoList;
