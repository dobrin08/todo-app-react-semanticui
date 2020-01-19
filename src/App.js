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
    itemsDone: 0,
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

    this.state.items.some(item => {
      if (this.state.currentItem === item.text) {
        itemExist = true
      }
    });

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

  // Get count of done items
  itemsDone = () => this.state.items.filter(item => {
    return item.completed === true;
  }).length;

  // Set item done
  setItemDone = key => {
    this.setState(prevState => {
      prevState.items.forEach(item => {
        if (item.key === key) {
          item.completed = !item.completed
        }
      });

      return {
        items: prevState.items,
        itemsDone: this.itemsDone(),
      };
    }, () => {
      if (this.inputElement.current) {
        this.inputElement.current.focus();
    }});
  }

  // Get count of items to delete
  itemsTodelete = () => this.state.items.filter(item => {
    return item.bulkDelete === true;
  }).length;

  isVisibleBulkDelete = (param) => {
    if ( param > 0 ) {
      return true
    } else {
      return false
    }
  };

  // Select multiple To-do items
  handleChange = (key, e) => {
    let isChecked = e.target.checked;

    this.setState(prevState => {
      prevState.items.map(item => {
        if (item.key === key) {
          item.bulkDelete = isChecked
        }
      });

      return {
        items: prevState.items,
        itemsToDelete: this.itemsTodelete(),
        isVisibleBulkDelete: this.isVisibleBulkDelete(this.itemsTodelete()),
      };
    })
  }

  // Delete To-to item
  deleteItem = key => {
    this.setState(state => ({
      items: state.items.filter(item => {
        return item.key !== key;
      }),
      itemsToDelete: this.state.itemsToDelete - 1,
      isVisibleBulkDelete: this.state.itemsToDelete - 1 > 0 ? true : false,
    }), () => {
      if (this.inputElement.current) {
        this.inputElement.current.focus();
      }

      this.setState(state => ({
        itemsDone: this.itemsDone(),
      }))
    });
  }

  // Delete All selected To-do items
  deleteSelected = () => {
    this.setState(state => ({
      items: state.items.filter(item => {
        return item.bulkDelete !== true;
      }),
      itemsToDelete: null,
      isVisibleBulkDelete: false,
    }), () => {
      this.setState(state => ({
        itemsDone: this.itemsDone(),
      }))
    })
  }

  // Hide Modal Popup that say To-do item exist
  handleClose = () => this.setState({ displayMessage: false })

  render() {
    return (
      <div className="wrapper">
        <Header
            totalTasks={this.state.items.length}
            itemsDone={this.state.itemsDone} />

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
                  setItemDone={this.setItemDone}
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
