import React, { Component, PropTypes } from 'react';

const propTypes = {};
const defaultProps = {
  completed: false,
  children: '',
};

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      completed,
      id,
    } = this.props;

    return (
      <li className={(completed) ? 'todoitem todoitem--is-completed' : 'todoitem'}>
        <input type="checkbox"  className="todoitem__check" checked={completed}
          onChange={(event) => this.props.onItemChecked(id, event)}
        />
        <label className="todoitem__text">
          {children}
        </label>
        <i className="todoitem__remove" onClick={(event) => this.props.onItemRemove(id, event)}>
        </i>
      </li>
    );
  }
}

ToDoItem.propTypes = propTypes;
ToDoItem.defaultProps = defaultProps;

export default ToDoItem;
