import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

class BulkDelete extends Component {
  render() {
    if (this.props.selectedItems === 0) {
      return null;
    }

    return (
      <Button
        color='red'
        onClick={this.props.deleteSelected}
      >
        Delete {this.props.selectedItems} items
      </Button>
    )
  }
}

BulkDelete.propTypes = {
  selectedItems: PropTypes.number,
  deleteSelected: PropTypes.func,
};

BulkDelete.defaultProps = {
  selectedItems: 0,
  deleteSelected: () => {
  },
};

export default BulkDelete;
