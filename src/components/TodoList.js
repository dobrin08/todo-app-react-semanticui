import React, { Component } from 'react'
import { Input, Divider } from 'semantic-ui-react'

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <Divider hidden />

        <form onSubmit={this.props.addItem}>
          <Input
            action='Add'
            placeholder="Add Task"
            size='big'
            autoFocus
            fluid
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput} />
        </form>

        <Divider hidden />
      </div>
    )
  }
}

export default TodoList;
