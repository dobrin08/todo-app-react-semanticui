import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class BulkDelete extends Component {
  render() {
    return (
      <Button color='red' onClick={() => this.props.deleteSelected()}>Delete {this.props.itemsToDelete} items</Button>
    )
  }
}

export default BulkDelete;
