import React, {Component} from 'react';
import DropdownFloating from './DropdownFloating';
import CSS from './toolbar.module.scss';

class Toolbar extends Component {
  render() {
    return (
      <div className={`${CSS.toolbar} clearfix`}>
        <div className="ui left floated buttons">
          <button className="ui button">All</button>
          <button className="ui button">Completed</button>
          <button className="ui button">Uncompleted</button>
        </div>
        <div className="ui right floated buttons">
          <DropdownFloating />
        </div>
      </div>
    )
  }
}

export default Toolbar;
