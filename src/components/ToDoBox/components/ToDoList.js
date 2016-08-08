import React, { Component, PropTypes } from 'react';
import ToDoItem from './ToDoItem';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    text: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  onItemChecked: PropTypes.func,
  onItemRemove: PropTypes.func,
};
const defaultProps = {
  data: [],
};

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.handleItemChecked = this.handleItemChecked.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
  }

  handleItemChecked(id, event) {
    this.props.onItemChecked(id, event);
  }

  handleItemRemove(id, event) {
    this.props.onItemRemove(id, event);
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <ul className="todolist">
        {
          data.map((item) => {
            return (
              <ToDoItem completed={item.completed} key={item.id} {...item}
                onItemChecked={this.handleItemChecked}
                onItemRemove={this.handleItemRemove}
              >
                {item.text}
              </ToDoItem>
            );
          })
        }
      </ul>
    );
  }
}

ToDoList.propTypes = propTypes;
ToDoList.defaultProps = defaultProps;

export default ToDoList;
