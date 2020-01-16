import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import BulkDelete from './components/BulkDelete';
import { Container, Grid } from 'semantic-ui-react'

import 'semantic-ui-less/semantic.less'
import './App.css'

class App extends React.Component {
  state = {
    items: [],
    currentItem: null,
    itemsToDelete: null,
    isVisibleBulkDelete: false,
    displayMessage: false
  };
  inputElement = React.createRef();

  handleInput = e => {
    this.setState({
      currentItem: e.target.value,
    });
  }

  addItem = e => {
    e.preventDefault();

    let itemExist = null;

    this.state.items.map(item => {
      if (this.state.currentItem === item.text) {
        itemExist = true
      }
    })

    this.setState(prevState => {
      if (!itemExist) {
        prevState.items.push({
          text: prevState.currentItem,
          key: Date.now(),
          completed: false,
        });

        return {
          items: prevState.items,
          currentItem: null,
          displayMessage: false
        };
      } else {
        return {
          displayMessage: true
        }
      }
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
      displayMessage: false
    }), () => {
      if (this.inputElement.current) {
        this.inputElement.current.focus();
      }
    });
  }

  handleChange = (key, e) => {
    let isChecked = e.target.checked;

    this.setState(prevState => {
      prevState.items.map(item => {
        if (item.key === key) {
          item.completed = isChecked
        }
      });

      return {
        items: prevState.items,
        itemsToDelete: this.state.items.filter(item => {
          return item.completed === true;
        }).length,
        isVisibleBulkDelete: true
      };
    })
  }

  deleteSelected = () => {
    this.setState(state => ({
      items: state.items.filter(item => {
        return item.completed === false;
      }),
      itemsToDelete: null,
      isVisibleBulkDelete: false,
      displayMessage: false
    }))
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

                {
                  this.state.displayMessage
                    ? <div className='text-danger'>ToDo Item Exist</div>
                    : null
                }

                <TodoItems
                  entries={this.state.items}
                  deleteItem={this.deleteItem}
                  handleChange={this.handleChange} />

                {
                  this.state.isVisibleBulkDelete
                    ? <BulkDelete
                        deleteSelected={this.deleteSelected}
                        itemsToDelete={this.state.itemsToDelete} />
                    : null
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
