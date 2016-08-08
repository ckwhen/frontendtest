import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import ToDoBox from '../../src/components/ToDoBox/';
import ToDoList from '../../src/components/ToDoBox/components/ToDoList';

describe('ToDoBox', function() {
  let data;
  beforeEach(function() {
    data = [
      {id: 1, completed: false, text: 'This is one task'},
      {id: 2, completed: false, text: 'This is *another* task'},
    ];
  });

  it('render todobox', function() {
    expect(shallow(<ToDoBox />).type())
      .to.equal('div');

    expect(shallow(<ToDoBox />).hasClass('todobox'))
      .to.equal(true);
  });

  it('render a todolist', function() {
    expect(shallow(<ToDoList />).type())
      .to.equal('ul');

    expect(shallow(<ToDoList />).hasClass('todolist'))
      .to.equal(true);
  });

  it('render todoitems', function() {
    const wrapper = mount(<ToDoList data={data} />);

    expect(wrapper.find('li')).to.have.length(data.length);
  });

  it('render task inputer', function() {
    const wrapper = mount(<ToDoBox />);

    expect(wrapper.find('.todobox__input').type())
      .to.equal('input');
  });

  describe('save task', function() {
    it('change task value', function() {
      const wrapper = mount(<ToDoBox />);
      const input = wrapper.find('.todobox__input');
      const task = 'dinner with friends.';

      input.simulate('change', { target: { value: task } });

      expect(input.prop('value'))
        .to.equal(task);
    });

    it('save task to todolist', function() {
      const wrapper = mount(<ToDoBox />);
      const input = wrapper.find('.todobox__input');
      const task = 'dinner with friends.';
      const origin = wrapper.find('.todoitem').length;

      wrapper.setState({ task });
      input.simulate('keydown', { keyCode: 13 });

      expect(wrapper.find('.todoitem').length)
        .to.equal(origin + 1);
    });
  });

});