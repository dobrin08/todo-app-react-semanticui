import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import { Container, Grid } from 'semantic-ui-react'

import 'semantic-ui-less/semantic.less'
import './App.css'

class App extends React.Component {
  state = {
    items: [],
    currentItem: null,
  };
  inputElement = React.createRef();

  handleInput = e => {
    this.setState({
      currentItem: e.target.value,
    });
  }

  addItem = e => {
    e.preventDefault();
    
    this.setState(prevState => {
      prevState.items.push({
        text: prevState.currentItem,
        key: Date.now(),
        completed: false,
      });

      return {
        items: prevState.items,
        currentItem: null,
      };
    }, () => {
      if (this.inputElement.current) {
        this.inputElement.current.focus();
      }
    });
  }

  deleteItem = key => {
    this.setState(state => ({
      items: state.items.filter(item => {
        return item.key !== key;
      }),
    }), () => {
      if (this.inputElement.current) {
        this.inputElement.current.focus();
      }
    });
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
