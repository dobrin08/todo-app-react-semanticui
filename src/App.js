import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import { Container, Grid } from 'semantic-ui-react'

import 'semantic-ui-less/semantic.less'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text:'', key:'', completed: null },
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    this.setState({
      currentItem: { text: itemText, key: Date.now(), completed: false }
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '', completed: null },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleChange = (key, e) => {
    return this.state.items.find(item => {
      if ( item.key === key ) {
        if (e.target.checked) {
          item.completed = true
          this.setState({
            completed: true,
          })
        } else {
          item.completed = false
          this.setState({
            completed: false,
          })
        }
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header totalTasks = {this.state.items.length} />

        <Container>
          <Grid>
            <Grid.Row centered>
              <Grid.Column mobile={16} computer={10}>
                <TodoList
                  addItem={this.addItem}
                  inputElement={this.inputElement}
                  handleInput={this.handleInput}
                  currentItem={this.state.currentItem} />

                <TodoItems
                  entries={this.state.items}
                  deleteItem={this.deleteItem}
                  handleChange={this.handleChange} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
