import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import * as PropTypes from "prop-types";

class AddTodo extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.addItem}
        className="add-todo"
      >
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
    )
  }
}

AddTodo.propTypes = {
  addItem: PropTypes.func,
  inputElement: PropTypes.object,
  handleInput: PropTypes.func,
  currentItem: PropTypes.string,
};

AddTodo.defaultProps = {
  addItem: () => {},
  inputElement: () => {},
  handleInput: () => {},
  currentItem: '',
};

export default AddTodo;
