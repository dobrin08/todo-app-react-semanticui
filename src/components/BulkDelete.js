import React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const BulkDelete = ({ deleteSelected, selectedItems }) => {
  if (selectedItems === 0) {
    return null;
  }

  return (
    <Button
      color='red'
      onClick={deleteSelected}
    >
      Delete {selectedItems} items
    </Button>
  )
};

BulkDelete.propTypes = {
  selectedItems: PropTypes.number,
  deleteSelected: PropTypes.func,
};

BulkDelete.defaultProps = {
  selectedItems: 0,
  deleteSelected: () => {},
};

export default BulkDelete;
