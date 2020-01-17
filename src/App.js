import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import BulkDelete from './components/BulkDelete';
import { Container, Grid, Button, Modal, Icon } from 'semantic-ui-react'

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

  // Handle input
  handleInput = e => {
    if ( e.target.value !== ' ' ) {
      this.setState({
        currentItem: e.target.value,
      });
    }
  }

  // Add To-to item to the list
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

  // Delete To-to item from list
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

  // Handle change of checkbox on To-do item
  handleChange = (key, e) => {
    let isChecked = e.target.checked;

    this.setState(prevState => {
      prevState.items.map(item => {
        if (item.key === key) {
          item.completed = isChecked
        }
      });

      let completedItems = this.state.items.filter(item => {
        return item.completed === true;
      }).length;

      let isVisibleBulkDeleteTemp =  function () {
        if ( completedItems > 0 ) {
          return true
        } else {
          return false
        }
      };

      return {
        items: prevState.items,
        itemsToDelete: completedItems,
        isVisibleBulkDelete: isVisibleBulkDeleteTemp()
      };
    })
  }

  // Delete selected To-do items from list
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

  // Display/Hide Modal Popup that say To-do item exist
  handleClose = () => this.setState({ displayMessage: false })

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

                {
                  this.state.isVisibleBulkDelete
                    ? <BulkDelete
                        deleteSelected={this.deleteSelected}
                        itemsToDelete={this.state.itemsToDelete} />
                    : null
                }

                <Modal open={this.state.displayMessage}>
                  <Modal.Content>
                    <Modal.Description className='text-center'>
                      <h2>This item exist</h2>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions className='text-center'>
                    <Button color='green' onClick={this.handleClose} inverted>
                      <Icon name='checkmark' /> Got it
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
