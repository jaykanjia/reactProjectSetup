import React, { Component, createRef } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterStatus: 'all',
    };

    this.inputRef = createRef();
  }

  addTodo = (e) => {
    e.preventDefault();
    // const todoText = this.todoTextRef;
    const todoText = this.inputRef.current;
    if (!todoText.value || todoText.value === '') return;
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          { text: todoText.value, isDone: false, id: new Date().valueOf() },
        ],
      }),
      () => {
        // this.todoTextRef.value = '';
        this.inputRef.current.value = '';
      },
    );
  };

  toggleComplete = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  changeFilterStatus = (newFilterStatus) => {
    this.setState({ filterStatus: newFilterStatus });
  };

  render() {
    const { todoList, filterStatus } = this.state;
    return (
      <div className="flex flex-col items-center h-screen">
        <header>
          <h1 className="text-4xl font-light py-4">Todo App</h1>
        </header>
        <form onSubmit={this.addTodo} className="flex">
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="todoText" className="sr-only">
              Todo text
            </label>
            <input
              ref={this.inputRef}
              // ref={(ref) => {
              //   this.todoTextRef = ref;
              // }}
              type="text"
              name="todoText"
              id="todoText"
              className="rounded-l-md"
            />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <section className="w-full my-4 flex-1 max-w-3xl mx-auto">
          {todoList
            .filter((x) => {
              switch (filterStatus) {
                case 'completed':
                  return x.isDone === true;
                case 'pending':
                  return x.isDone === false;
                default:
                  return true;
              }
            })
            .map((item) => (
              <div key={item.id} className="flex items-center px-4 py-2">
                <div>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="isCompleted" className="sr-only">
                    is completed
                  </label>
                  <input
                    type="checkbox"
                    name="isCompleted"
                    id="isCompleted"
                    checked={item.isDone}
                    onChange={() => this.toggleComplete(item)}
                  />
                </div>
                <p className="flex-1 px-2">{item.text}</p>
                <button
                  type="button"
                  className="btn bg-red-600 hover:bg-red-500"
                  onClick={() => this.deleteTodo(item)}
                >
                  Delete
                </button>
              </div>
            ))}
        </section>
        <footer className="w-full flex">
          <button
            type="button"
            className="btn flex-1 rounded-none py-4"
            onClick={() => this.changeFilterStatus('all')}
          >
            All
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none py-4"
            onClick={() => this.changeFilterStatus('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none py-4"
            onClick={() => this.changeFilterStatus('completed')}
          >
            Completed
          </button>
        </footer>
      </div>
    );
  }
}
