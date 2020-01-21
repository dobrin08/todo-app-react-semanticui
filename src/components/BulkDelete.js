import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

class BulkDelete extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.selectedItems
          ? <Button
              color='red'
              onClick={this.props.deleteSelected}
            >
              Delete {this.props.selectedItems} items
            </Button>
          : null
        }
      </React.Fragment>
    )
  }
}

BulkDelete.propTypes = {
  selectedItems: PropTypes.number,
  deleteSelected: PropTypes.func,
};

BulkDelete.defaultProps = {
  selectedItems: 0,
  deleteSelected: () => {},
};

export default BulkDelete;
