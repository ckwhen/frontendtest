import './todobox.css';
import React, { Component, PropTypes } from 'react';
import ToDoList from './components/ToDoList';

const propTypes = {};
const defaultProps = {};

class ToDoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',

      data: (localStorage.todolist) ? this.getListFromStorage() : [],
    };
    this.handleTaskTyping = this.handleTaskTyping.bind(this);
    this.handleItemChecked = this.handleItemChecked.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
  }

  getListFromStorage() {
    return JSON.parse(localStorage.todolist);
  }

  setListToStorage(list) {
    return localStorage.setItem('todolist', JSON.stringify(list));
  }

  generateId() {
    return Math.floor(Math.random()*90000) + 10000;
  }

  handleTaskTyping(event) {
    this.setState({ task: event.target.value });
  }

  handleTaskSave(event) {
    const value = this.state.task.trim();
    if (event.keyCode !== 13 || !value) {
      return;
    }

    const result = this.state.data.slice();
    result.push({
      id: this.generateId(),
      text: value,
      completed: false,
    });

    this.setState({
      task: '',
      data: result,
    });
    this.setListToStorage(result);
  }

  handleItemChecked(id, event) {
    const list = this.state.data.map((item) => {
      if (item.id === id) {
        item.completed = (item.completed) ? false : true ;
        return item;
      }
      return item;
    });

    this.setState({ data: list });
    this.setListToStorage(list);
  }

  handleItemRemove(id, event) {
    const list = this.state.data.filter((item) => {
      return item.id !== id;
    });

    this.setState({ data: list });
    this.setListToStorage(list);
  }

  render() {
    const data = this.state.data;

    let dividerCan = null;
    if (data.length > 0) {
      dividerCan = (
        <div className="todobox__divider"></div>
      );
    }

    return (
      <div className="todobox">
        <div className="todobox__task">
          <input className="todobox__input" type="text" placeholder="請輸入待辦事項"
            value={this.state.task}
            onChange={this.handleTaskTyping}
            onKeyDown={this.handleTaskSave.bind(this)}
          />
        </div>
        {dividerCan}
        <div className="todobox__wrap">
          <ToDoList data={data}
            onItemChecked={this.handleItemChecked}
            onItemRemove={this.handleItemRemove}
          />
        </div>
      </div>
    );
  }
}

ToDoBox.propTypes = propTypes;
ToDoBox.defaultProps = defaultProps;

export default ToDoBox;
